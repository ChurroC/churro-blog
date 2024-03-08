"use client";

import { useEffect, DependencyList } from "react";
import { useHasMounted } from "./useHasMounted.hook";

// useEffect only on change of dependancy not inital render
// situations where intial render has invalid data like localdata from server
// where until we have mounted we don't have the correct data from localstorage
// then we can use this to only run the effect when the data is synced up
export function useOnChange(
    callback: () => void,
    dependancies: DependencyList
) {
    const hasMounted = useHasMounted();

    useEffect(() => {
        if (hasMounted) {
            return callback();
        }
    }, [hasMounted, ...dependancies]);
}
