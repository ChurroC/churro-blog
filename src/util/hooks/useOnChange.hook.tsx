"use client";

import { useEffect, useState, DependencyList, EffectCallback } from "react";

function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}

// This works when you are on client and inital data is inaccurate and you want to wait until the data is synced up
// since this doesn't run on first render and only when dependancies change
export function useOnlyOnChange(
    callback: EffectCallback,
    dependancies: DependencyList
) {
    const hasMounted = useHasMounted();

    useEffect(() => {
        if (hasMounted) {
            return callback();
        }
    }, dependancies);
}
