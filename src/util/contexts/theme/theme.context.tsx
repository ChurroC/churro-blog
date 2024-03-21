"use client";

import { useCookies } from "@/util/hooks/useCookies.hook";
import { createContext, use } from "react";

export type ThemeStateProps = "light" | "dark" | "system";

export const ThemeContext = createContext<ThemeStateProps>("system");
export const SetThemeContext = createContext<
    React.Dispatch<React.SetStateAction<ThemeStateProps>>
>(() => {});

export function ThemeProvider({
    children,
    cookie
}: {
    children: React.ReactNode;
    cookie?: ThemeStateProps;
}) {
    const [theme, setTheme] = useCookies<ThemeStateProps>("theme", cookie!);

    return (
        <SetThemeContext.Provider value={setTheme}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </SetThemeContext.Provider>
    );
}

// theme is going to be a function to reduce unesccary render
export function getTheme(): {
    theme: () => ThemeStateProps;
    setTheme: React.Dispatch<React.SetStateAction<ThemeStateProps>>;
} {
    return {
        theme: () => use(ThemeContext),
        setTheme: use(SetThemeContext)
    };
}
