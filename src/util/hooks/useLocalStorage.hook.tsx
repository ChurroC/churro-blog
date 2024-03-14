"use client";

import { useEffect, useRef, useState } from "react";
import { useOnlyOnChange } from "./useOnChange.hook";
import { useEventListener } from "./useWindowListener";
import { useReferenceState } from "./useReferenceState.hook";

export function useLocalStorage<ValueType>(
    key: string,
    defaultValue: ValueType,
    debounceTime: number = 0
): [ValueType, React.Dispatch<React.SetStateAction<ValueType>>] {
    const [value, setValue] = useState<ValueType>(defaultValue);

    useEffect(() => {
        // once page is mounted get key
        const localValue = localStorage.getItem(key);
        if (localValue) {
            // if there is a value in localstorage set it to our reactive value
            setValue(JSON.parse(localValue) as ValueType);
        }
    }, [key]);

    // Goofy idea but is it really going to be faster to use a ref to keep track of the key and pass by reference instead of adding and removing listeners?
    // const keyTheme = useRef(key);
    // useEffect(() => {
    //     keyTheme.current = key;
    // }, [key]);
    // const keyReference = useReferenceState(key);
    // const valueReference = useReferenceState(value);

    // When other tabs change localstorage update on this page
    // useEffect(() => {
    //     function storageChange({
    //         key: keyChanged,
    //         newValue
    //     }: StorageEventInit) {
    //         // reference should pick up current value of key
    //         if (keyTheme.current === keyChanged) {
    //             setValue(JSON.parse(newValue!) as ValueType);
    //         }
    //     }

    //     window.addEventListener("storage", storageChange);

    //     return () => window.removeEventListener("storage", storageChange);
    // }, []);

    // useEventListener<StorageEvent>(
    //     "storage",
    //     ({ key: keyChanged, newValue }) => {
    //         console.log(valueReference.current);
    //         if (keyReference.current === keyChanged) {
    //             setValue(JSON.parse(newValue!) as ValueType);
    //         }
    //     }
    // );

    // after value has been changed set the localstorage with a debounce.
    // don't need debounce dependancy since if it changed I don't want to waste time setting the localstorage when it is the same value
    // Use only on change so it runs when value changes to correct value
    useOnlyOnChange(() => {
        const delayDebounceFn = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return [value, setValue];
}
