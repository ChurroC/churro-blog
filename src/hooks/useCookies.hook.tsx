"use client";

import { useOnChange } from "./useOnChange.hook";
import { useTabState } from "./useTabState.hook";

export function useCookies<InitalStateType>(
    key: string,
    initalState: InitalStateType,
    debounceTime: number = 0
): [InitalStateType, React.Dispatch<React.SetStateAction<InitalStateType>>] {
    // Use broadcast instead of change in cookie since this is cooler
    const [value, setValue, receiveMessage] = useTabState<InitalStateType>(
        initalState,
        key
    );

    useOnChange(() => {
        const delayDebounceFn = setTimeout(() => {
            // If this is no receiveMessage, then it means that the change was made by this tab
            if (!receiveMessage) {
                if (typeof cookieStore !== "undefined") {
                    cookieStore.set(key, JSON.stringify(value));
                } else {
                    document.cookie = `${key}=${JSON.stringify(value)}`;
                }
            }
        }, debounceTime);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return [value, setValue];
}
