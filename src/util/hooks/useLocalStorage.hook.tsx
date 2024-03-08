"use client";

import { useEffect, useState } from "react";
import { useHasMounted } from "./useHasMounted.hook";
import { useOnChange } from "./useOnChange.hook";

export function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    debounceTime: number = 1000
): [T, React.Dispatch<React.SetStateAction<T>>, boolean] {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        // once page is mounted get key
        const localValue = localStorage.getItem(key);
        console.log(localValue);
        if (localValue) {
            // if there is a value in localstorage set it to our reactive value
            setValue(JSON.parse(localValue) as T);
            console.log("set value", JSON.parse(localValue));
        }
    }, []);

    // When other tabs change localstorage update on this page
    useEffect(() => {
        function storageChange({
            key: keyChanged,
            newValue
        }: StorageEventInit) {
            // console.log(keyChanged, newValue);
            if (key === keyChanged) {
                setValue(JSON.parse(newValue!) as T);
            }
        }

        window.addEventListener("storage", storageChange);

        return () => window.removeEventListener("storage", storageChange);
    }, [key]);

    // after value has been changed set the localstorage with a debounce.
    // don't need debounce dependancy since if it changed I don't want to waste time setting the localstorage when it is the same value
    useOnChange(() => {
        const delayDebounceFn = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(value));
            console.log("set localstorage");
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [key, value]);

    const hasSyncedClient = useHasMounted();
    // If value has been synced to local storage then hasMounted is true
    // This means that the useEffect will start running when the value changes not on first render
    return [value, setValue, hasSyncedClient];
}
