"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";

// sketch
const ThemeContext = createContext<[string, (theme: string) => void]>([
    "system",
    null as unknown as (theme: string) => void
]);

// was going to use boolean but instead:
// "light" | "dark" | "system"
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useLocalStorage<string>("theme", "system", 250);
    if (
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    // Hav to wrap everytthing in a div to give it a dark class
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): [string, (theme: string) => void] {
    return useContext(ThemeContext);
}

// Using alert I figured out it runs after head and body have loaded but none of the components
// This will cause a rehydration issue but it is what it is
if (
    JSON.parse(localStorage["theme"] || null) === "dark" ||
    (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}
