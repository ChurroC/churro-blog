"use client";

import { useState } from "react";
import { useOnlyOnChange } from "./useOnChange.hook";

export function useCookies<ValueType>(
    key: string,
    cookieValue: ValueType,
    debounceTime: number = 0
): [ValueType, React.Dispatch<React.SetStateAction<ValueType>>] {
    const [value, setValue] = useState<ValueType>(cookieValue);

    useOnlyOnChange(() => {
        const delayDebounceFn = setTimeout(() => {
            void fetch("/api/set-cookie", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ key, value })
            });
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return [value, setValue];
}
