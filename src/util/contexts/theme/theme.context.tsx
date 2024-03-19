"use client";

import { useCookies } from "@/util/hooks/cookie/useCookies.hook";
import { useOnlyOnChange } from "@/util/hooks/useOnChange.hook";
import { useReferenceState } from "@/util/hooks/useReferenceState.hook";
import { createContext, use, useEffect } from "react";

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
    console.log(cookie, "cookie");
    const [theme, setTheme] = useCookies<ThemeStateProps>("theme", cookie!);
    console.log("theme", theme);

    // This might seem stupid but this is my best solution to pass by reference the theme to the themeChange function
    // Since if I use state or a constant it will be the same value and the themeChange function will never change
    // The only other solution is to add and remove event listener every time the theme changes or I could just modify this ref
    const themeReference = useReferenceState(theme);

    // Runs once on the client and uses reference to current theme to check if "system" and based of "prefers-color-scheme" add dark to body
    useEffect(() => {
        function themeChange({ matches }: MediaQueryListEvent) {
            if (themeReference.current === "system") {
                if (matches) document.documentElement.classList.add("dark");
                else document.documentElement.classList.remove("dark");
            }
        }

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", themeChange);

        return () =>
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", themeChange);
    }, []);

    // doesn't actually change the theme until it mounts and syncs up with localstorage
    // this is to prevent FOUC since the theme.js runs first
    // run every time on the client
    useOnlyOnChange(() => {
        if (
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // When we do set cookie get cookies gets called
        // setCookie<ThemeStateProps>("theme", themeReference.current);
    }, [theme]);

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
