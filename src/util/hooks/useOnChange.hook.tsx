"use client";

import { useEffect } from "react";
import { useHasMounted } from "./useHasMounted.hook";

// This works when you are on client and inital data is inaccurate and you want to wait until the data is synced up
// since this doesn't run on first render and only when dependancies change
export function useOnlyOnChange(
    callback: React.EffectCallback,
    dependancies: React.DependencyList
) {
    const hasMounted = useHasMounted();

    useEffect(() => {
        console.log(hasMounted);
        if (hasMounted) {
            callback();
        }
    }, dependancies);
}
