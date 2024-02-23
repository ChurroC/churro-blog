import { useRef } from "react";

// basic helper for debounce - Josh Comeau
// modified a bit by me for typescript
// this a bit weird but returns a function so need to use arrows funcs
// set this to a speicfic variable since evry time it causes a new timeout
// modified for react
export function debounce(callback: any, wait: number) {
    let timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);

    return (...args: any) => {
        if (timeoutId.current) clearTimeout(timeoutId.current!);
        timeoutId.current = setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
}
