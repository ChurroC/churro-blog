"use client";

import { useEffect, useState } from "react";
import { useOnlyOnChange } from "./useOnChange.hook";

export function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    debounceTime: number = 0
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        // once page is mounted get key
        const localValue = localStorage.getItem(key);
        if (localValue) {
            // if there is a value in localstorage set it to our reactive value
            setValue(JSON.parse(localValue) as T);
        }
    }, []);


    // When other tabs change localstorage update on this page
    useEffect(() => {
        function storageChange({
            key: keyChanged,
            newValue
        }: StorageEventInit) {
            if (key === keyChanged) {
                setValue(JSON.parse(newValue!) as T);
            }
        }

        window.addEventListener("storage", storageChange);

        return () => window.removeEventListener("storage", storageChange);
    }, [key]);

    // after value has been changed set the localstorage with a debounce.
    // don't need debounce dependancy since if it changed I don't want to waste time setting the localstorage when it is the same value
    // Use only on change so it runs when value changes to correct value
    useOnlyOnChange(() => {
        const delayDebounceFn = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [key, value]);
    
    return [value, setValue];
}
