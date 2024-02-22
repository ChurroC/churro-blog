"use client";

import { createContext, use, useContext } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";

// sketch
export const ThemeContext = createContext<[string, (theme: string) => void]>([
    "system",
    null as unknown as (theme: string) => void
]);

// was going to use boolean but instead:
// "light" | "dark" | "system"
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useLocalStorage<string>("theme", "system");

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): [string, (theme: string) => void] {
    return useContext(ThemeContext);
}
