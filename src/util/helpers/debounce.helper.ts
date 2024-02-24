// basic helper for debounce - Josh Comeau
// modified a bit by me for typescript --  really helped me understand ts more
// this a bit weird but returns a function so need to use arrows funcs
export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
    callback: F,
    wait: number
): (...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    // Was trying to return ReturnType<F> then realized it doesn't return but instead calls a function
    function debounce(...args: Parameters<F>): void {
        console.log("debounce has been called");
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
            console.log("callback has been called after " + wait + "ms");
        }, wait);
    }

    return debounce;
}
