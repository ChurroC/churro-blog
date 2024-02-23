"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/util/helpers/useDebounce.helper";

// basic utility hook to get local storage - Josh Comeau
// modified a bit by me for ssr
// also add debounce for fun so even though the ui will change the localstorage will only update every 250ms
export function useLocalStorage<T>(
    key: string,
    defaultValue: any,
    debounceTime: number = 0
): [T, (value: T) => void] {
    // dont need setValue before page has mounted and no user input
    // To get past ssr on intial render I could:
    // add state in useffect
    // use the useMounted hook but intial render it will still say not mounted cause useffect runs after render
    // try catch - but this causes rehydration error since the server and client are out of sync
    // or the window defined

    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);
        return localValue !== null ? JSON.parse(localValue) : defaultValue;
    });

    useEffect(
        // debounce returns a function so need to use arrow function
        // basically value and change and be repsonsive the second the value is changed but it only updated localstorage every debounceTime
        useDebounce<() => void>(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime),
        [key, value]
    );

    return [value, setValue];
}
