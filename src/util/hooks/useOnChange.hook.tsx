"use client";

import { useEffect, useRef } from "react";
import { useHasMounted } from "./useHasMounted.hook";

// This works when you are on client and inital data is inaccurate and you want to wait until the data is synced up
// since this doesn't run on first render and only when dependancies change
export function useOnlyOnChange(
    callback: React.EffectCallback,
    dependancies: React.DependencyList
) {
    // const hasMounted = useHasMounted();
    // useEffect(() => {
    //     console.log("useOnlyOnChange", hasMounted);
    // }, [hasMounted]);

    console.log([callback, ...dependancies]);
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        console.log("useffect 2");
        return callback();
    }, [callback, ...dependancies]);
}
