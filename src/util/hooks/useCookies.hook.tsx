// @ts-nocheck
// Need to do this to stop the cookieStore event since not supported in all browser (Firefox :( )

"use client";

import { useState } from "react";
import { useOnlyOnChange } from "./useOnChange.hook";
import { useEventListener } from "./useEventListener";
import { isClient } from "../helpers/isClient";
import { useReferenceState } from "./useReferenceState.hook";

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

    const valueReference = useReferenceState(value);
    const keyReference = useReferenceState(key);
    useEventListener(
        "change",
        event => {
            console.log("cookie changes");
            if (
                event.changed[0].name === keyReference.current &&
                event.changed[0].value !== valueReference.current
            ) {
                console.log("bhj");
                setValue(event.changed[0].value as ValueType);
            }
        },
        isClient() ? window.cookieStore : null
    );

    return [value, setValue];
}
