"use client";

import { createContext, use, useEffect } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";
import { useOnlyOnChange } from "@/util/hooks/useOnChange.hook";
import { useReferenceState } from "@/util/hooks/useReferenceState.hook";
import { useEventListener } from "@/util/hooks/useEventListener";
import { setCookie } from "@/util/helpers/cookies/setCookies";

export type ThemeStateProps = "light" | "dark" | "system";

// "light" | "dark" | "system"
// React.Dispatch<React.SetStateAction<string>> is just what vs code said useState used
export const ThemeContext = createContext<
    [ThemeStateProps, React.Dispatch<React.SetStateAction<ThemeStateProps>>]
>(["system", () => {}]);

// workflow:
// theme.js runs first to prevent FOUC
// in server side render we get the theme from localstorage which defaults to system which ends up being light which causes no dark class in body other than the one from theme.js
// then we get the theme from localstorage and we change the theme state to the value in localstorage
// if the theme state changes it will add the dark class to the body

// It is going to be system first render then light or dark on second render
export function ThemeProvider({
    children,
    cookie
}: {
    children: React.ReactNode;
    cookie?: ThemeStateProps;
}) {
    const [theme, setTheme] = useLocalStorage<ThemeStateProps>(
        "theme",
        cookie ?? "system"
    );

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

    useEventListener("visibilitychange", e => {
        // keep alive agttribute needed in fetch
        // void setCookie<ThemeStateProps>("theme", themeReference.current);
        void fetch("/api/set-cookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                key: "theme",
                value: themeReference.current
            }),
            keepalive: true
        });
        //e.preventDefault();
    });

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
