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

    // Sketch yet again but you got to do what you got to do
    if (
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
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

// I spent way to long on this but have to do default import to get dynamic import to build
export default ThemeProvider;
