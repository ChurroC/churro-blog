"use client";

import { useCookies } from "@/util/hooks/cookie/useCookies.hook";
import { createContext, use } from "react";

export type ThemeStateProps = "light" | "dark" | "system";

// "light" | "dark" | "system"
// React.Dispatch<React.SetStateAction<string>> is just what vs code said useState used
export const ThemeContext = createContext<
    [ThemeStateProps, React.Dispatch<React.SetStateAction<ThemeStateProps>>]
>(["system", () => {}]);

export function ThemeProvider({
    children,
    cookie
}: {
    children: React.ReactNode;
    cookie?: ThemeStateProps;
}) {
    const [theme, setTheme] = useCookies<ThemeStateProps>("theme", cookie!);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

// call this getTheme instead of useTheme since even though it is a hook the "use" hook is weird and break the rules. Also allows this to be conditional.
export function getTheme(): [
    ThemeStateProps,
    React.Dispatch<React.SetStateAction<ThemeStateProps>>
] {
    return use(ThemeContext);
}
