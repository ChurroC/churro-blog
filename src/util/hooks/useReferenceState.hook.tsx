"use client";

import { useEffect, useRef } from "react";

export function useReferenceState<T>(state: T) {
    const ref = useRef(state);

    useEffect(() => {
        ref.current = state;
    }, [state]);

    return ref;
}
