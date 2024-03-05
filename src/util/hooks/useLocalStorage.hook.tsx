"use client";

import { useEffect, useState } from "react";

// basic utility hook to get local storage - Josh Comeau
// modified a bit by me for ssr
// also add debounce for fun so even though the ui will change the localstorage will only update every 250ms
export function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    debounceTime: number = 0
): [T, React.Dispatch<React.SetStateAction<T>>] {
    // dont need setValue before page has mounted and no user input
    // To get past ssr on intial render I could:
    // add state in useffect
    // use the useMounted hook but intial render it will still say not mounted cause useffect runs after render
    // try catch - but this causes rehydration error since the server and client are out of sync
    // or the window defined

    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        // once page is mounted get key
        const localValue = localStorage.getItem(key);
        if (localValue !== null) {
            // if there is a value in localstorage set it to our reactive value
            setValue(JSON.parse(localValue) as T);
        }
    }, []);

    // after value has been changed set the localstorage with a debounce.
    // don't need debounce dependancy since if it changed I don't want to waste time setting the localstorage when it is the same value
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [key, value]);

    return [value, setValue];
}
