"use client";

import { createContext, use, useEffect, useRef } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";
import { useOnChange } from "@/util/hooks/useOnChange.hook";

// sketch
const ThemeContext = createContext<
    [string, React.Dispatch<React.SetStateAction<string>>]
>(["system", () => {}]);

// was going to use boolean but instead:
// "light" | "dark" | "system"

// workflow:
// theme.js runs first to prevent FOUC
// in server side render we get the theme from localstorage which defaults to system which ends up being light since no (prefers-color-scheme: dark)
// then we get the theme from localstorage
// it won't change the classes until the second render since the effect in useLocalStorage has to switch the theme state to sync with localstorage then the class code start
// once both are in sync the classes will be added and removed

// It is going to be system first render then light or dark on second render
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme, hasSyncedClient] = useLocalStorage<string>(
        "theme",
        "system"
    );

    // doesn't actually change the theme until it mounts and syncs up with localstorage
    // this is to prevent FOUC since the theme.js runs first
    console.log("ThemeProvider");
    if (hasSyncedClient) {
        if (
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    // Only runs after data has been synced once unlike useHasMounted that will run every time
    useEffect(() => {
        function themeChange() {
            console.log("themeChange", theme);
            if (theme === "system") {
                setTheme("system");
            }
        }

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", themeChange);

        return () =>
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", themeChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

// call this getTheme instead of useTheme since even though it is a hook the "use" hook is weird and break the rules
export function getTheme(): [
    string,
    React.Dispatch<React.SetStateAction<string>>
] {
    return use(ThemeContext);
}
