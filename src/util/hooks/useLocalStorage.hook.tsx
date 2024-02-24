"use client";

import { useCallback, useEffect, useState } from "react";
import { debounce } from "@/util/helpers/debounce.helper";

// basic utility hook to get local storage - Josh Comeau
// modified a bit by me for ssr
// also add debounce for fun so even though the ui will change the localstorage will only update every 250ms
export function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    debounceTime: number = 0
): [T, (value: T) => void] {
    // dont need setValue before page has mounted and no user input
    // To get past ssr on intial render I could:
    // add state in useffect
    // use the useMounted hook but intial render it will still say not mounted cause useffect runs after render
    // try catch - but this causes rehydration error since the server and client are out of sync
    // or the window defined

    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        console.log("useLocalStorage has mounted");
        // once page is mounted get key
        const localValue = localStorage.getItem(key);
        if (localValue !== null) {
            // if there is a value in localstorage set it to our reactive value
            setValue(JSON.parse(localValue) as T);
        }
    }, []);

    // This was stupid but I got it to work
    // Basically the problem I had was the the intial value of system was being used and saved with the useCallback
    // I now have a value that is passed down so the timeouts in the function stays the same.
    const debounceFn = useCallback((value: T) => {
        debounce<(valueInDebounce: T) => void>((valueInDebounce: T) => {
            localStorage.setItem(key, JSON.stringify(valueInDebounce));
        }, debounceTime)(value);
    }, []);
    useEffect(() => {
        debounceFn(value);
    }, [key, value]);

    // basically value and change and be repsonsive the second the value is changed but it only updated localstorage every debounceTime

    return [value, setValue];
}
