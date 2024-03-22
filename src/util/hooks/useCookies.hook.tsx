"use client";

import { useOnlyOnChange } from "./useOnChange.hook";
import { useTabState } from "./useTabState.hook";

export function useCookies<CookieType>(
    key: string,
    cookieValue: CookieType,
    debounceTime: number = 0
): [CookieType, React.Dispatch<React.SetStateAction<CookieType>>] {
    // Use broadcast instead of change in cookie since this is cooler
    const [value, setValue] = useTabState<CookieType>(cookieValue, key);

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
