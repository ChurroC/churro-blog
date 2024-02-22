// basic helper for debounce - Josh Comeau
// modified a bit by me for typescript
// this a bit weird but returns a function so need to use arrows funcs
export function debounce(callback: any, wait: number) {
    let timeoutId: any;

    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
}
