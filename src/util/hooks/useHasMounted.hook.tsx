"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// basic utility hook to check if the component has mounted from - Josh Comeau
// I would rather lazy load the component without srr so I don't have to worry. Since the hook end sup hiding the component during ssr and
// only runs on second render while no ssr runs on first render
export function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        console.log("hji");
        setHasMounted(true);
    }, []);

    return hasMounted;
}
export function useIsMounted() {
    const ref = useRef(true);
    useEffect(() => {
        return () => {
            ref.current = false;
        };
    }, []);
    return useCallback(() => ref.current, []);
}
