"use client";

import { useState } from "react";
import { useOnlyOnChange } from "../useOnChange.hook";

export function useCookies<ValueType>(
    key: string,
    cookieValue: ValueType,
    debounceTime: number = 0
): [ValueType, React.Dispatch<React.SetStateAction<ValueType>>] {
    // Maybve use useOptimistc for this instead
    const [value, setValue] = useState<ValueType>(cookieValue);

    // after value has been changed set the localstorage with a debounce.
    // don't need debounce dependancy since if it changed I don't want to waste time setting the localstorage when it is the same value
    // Use only on change so it runs when value changes to correct value
    useOnlyOnChange(() => {
        console.log("hji");
        const delayDebounceFn = setTimeout(async () => {
            void (await fetch("/api/set-cookie", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ key, value })
            }));
            console.log("set cookie");
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return [value, setValue];
}
