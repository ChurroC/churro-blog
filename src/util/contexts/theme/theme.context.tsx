"use client";

import { createContext, use, useEffect, useSyncExternalStore } from "react";
import { useLocalStorage } from "@/util/hooks/useLocalStorage.hook";
import { useHasMounted } from "@/util/hooks/useHasMounted.hook";

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
    const [theme, setTheme] = useLocalStorage<string>("theme", "system");

    // doesn't actually change the theme until it mounts and syncs up with localstorage
    // this is to prevent FOUC since the theme.js runs first
    if (useHasMounted()) {
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

    // useEffect(() => {
    //     const themeListener = window.matchMedia("(prefers-color-scheme: dark)");

    //     themeListener.addEventListener("change", ({ matches }) => {
    //         if (matches) {
    //             setTheme("dark")
    //         } else {
    //             setTheme("light");
    //         }
    //     });

    //     return () => themeListener.removeEventListener("change", () => {});
    // });

    const storage = useSyncExternalStore<string>(
        callback => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", () => {
                    callback();
                    console.log("change");
                });
            return () => {
                window
                    .matchMedia("(prefers-color-scheme: dark)")
                    .removeEventListener("change", callback);
            };
        },
        () => {
            const localValue = localStorage.getItem("theme");
            if (localValue) {
                // if there is a value in localstorage set it to our reactive value
                return JSON.parse(localValue);
            }
            return "system";
        },
        () => "system"
    );

    useEffect(() => {
        console.log(storage);
        setTheme(storage);
    }, [storage]);

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
