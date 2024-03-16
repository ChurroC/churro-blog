// Never use this for rendering since hydration issues will occur
export function isServer() {
    return typeof window === "undefined";
}
