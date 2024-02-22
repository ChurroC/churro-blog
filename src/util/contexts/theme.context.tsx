import { createContext } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";

export const ThemeContext = createContext<
    [string, ((lightMode: string) => void) | null]
>(["system", null]);

// was going to use boolean but instead:
// "light" | "dark" | "system"
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [lightMode, setLightMode] = useLocalStorage<string>(
        "theme",
        "system"
    );

    return (
        <ThemeContext.Provider value={[lightMode, setLightMode]}>
            {children}
        </ThemeContext.Provider>
    );
}
