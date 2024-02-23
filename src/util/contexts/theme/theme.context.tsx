"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";
import { useHasMounted } from "@/util/hooks/useHasMounted";

// sketch
const ThemeContext = createContext<[string, (theme: string) => void]>([
    "system",
    null as unknown as (theme: string) => void
]);

// was going to use boolean but instead:
// "light" | "dark" | "system"

// workflow:
// theme.js runs first to prevent FOUC
// in server side render we get the theme from localstorage which defaults to system which ends up being light since no (prefers-color-scheme: dark)
// then we get the theme from localstorage
// it won't change the classes until the second render since the effect in useLocalStorage has to switch the theme state to sync with localstorage then the class code start
// once both are in sync the classes will be added and removed
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useLocalStorage<string>("theme", "system", 250);

    if (useHasMounted()) {
        if (
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): [string, (theme: string) => void] {
    return useContext(ThemeContext);
}
