"use client";

import { useEffect, useState } from "react";
import { debounce } from "@/util/helpers/debounce.helper";

// basic utility hook to get local storage - Josh Comeau
// modified a bit by me for ssr
// also add debounce for fun so even though the ui will change the localstorage will only update every 250ms
export function useLocalStorage<T>(
    key: string,
    defaultValue: any = null,
    debounceTime: number = 0
): [T, (value: T) => void] {
    // dont need setValue before page has mounted and no user input
    // To get past ssr on intial render I could:
    // add state in useffect
    // use the useMounted hook but intial render it will still say not mounted cause useffect runs after render
    // try catch - but this causes rehydration error since the server and client are out of sync
    // or the window defined

    const [value, setValue] = useState(() => {
        try {
            const localValue = localStorage.getItem(key);
            return localValue !== null ? JSON.parse(localValue) : defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(
        // debounce returns a function so need to use arrow function
        debounce(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime),
        [key, value]
    );

    return [value, setValue];
}
