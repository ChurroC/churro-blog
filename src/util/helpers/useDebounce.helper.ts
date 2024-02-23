import { useRef } from "react";

// basic helper for debounce - Josh Comeau
// modified a bit by me for typescript --  really helped me understand ts more
// this a bit weird but returns a function so need to use arrows funcs
// modified for react
// should I call it a hook? I don't know
export function useDebounce<F extends (...args: any[]) => any>(
    callback: F,
    wait: number
): (...args: Parameters<F>) => void {
    const timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);

    // Was trying to return ReturnType<F> then realized it doesn't return but instead calls a function
    function debounce(...args: Parameters<F>): void {
        if (timeoutId.current) clearTimeout(timeoutId.current!);
        timeoutId.current = setTimeout<Parameters<F>[]>(() => {
            callback(...args);
        }, wait);
    }

    return debounce;
}
