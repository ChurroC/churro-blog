"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// basic utility hook to check if the component has mounted from - Josh Comeau
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
