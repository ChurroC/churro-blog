"use client";

import { useEffect, useState } from "react";
import { useHasMounted, useIsMounted } from "./useHasMounted.hook";
import { debounce } from "@/util/helpers/debounce.helper";

// basic utility hook to get local storage - Josh Comeau
// modified a bit by me for ssr
// also add debounce for fun so even though the ui will change the localstorage will only update every 250ms
export function useLocalStorage<T>(
    key: string,
    defaultValue?: any,
    debounceTime?: number
): [T, (value: T) => void] {
    // dont need setValue before page has mounted and no user input
    const isMounted = useIsMounted();

    const [value, setValue] = useState(() => {
        console.log("useLocalStorage: hasMounted", isMounted);
        if (!isMounted) return defaultValue;
        const localValue = localStorage.getItem(key);
        return localValue !== null ? JSON.parse(localValue) : defaultValue;
    });

    useEffect(
        // debounce returns a function so need to use arrow function
        debounce(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, debounceTime || 0),
        [key, value]
    );

    return [value, setValue];
}
