"use client";

import { isClient } from "@/util/helpers/isClient";
import { useCookies } from "@/util/hooks/useCookies.hook";
import { useEventListener } from "@/util/hooks/useEventListener";
import { useOnlyOnChange } from "@/util/hooks/useOnChange.hook";
import { useReferenceState } from "@/util/hooks/useReferenceState.hook";
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

    const themeReference = useReferenceState(theme);
    useEventListener(
        "change",
        ({ matches }: MediaQueryListEventInit) => {
            console.log(themeReference.current, "change", matches);
            if (themeReference.current === "system") {
                if (matches) document.documentElement.classList.add("dark");
                else document.documentElement.classList.remove("dark");
            }
        },
        isClient() ? window.matchMedia("(prefers-color-scheme: dark)") : null
    );

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
    }, [theme]);

    return (
        <SetThemeContext.Provider value={setTheme}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </SetThemeContext.Provider>
    );
}

export function getTheme(): ThemeStateProps {
    return use(ThemeContext);
}
export function getSetTheme(): React.Dispatch<
    React.SetStateAction<ThemeStateProps>
> {
    return use(SetThemeContext);
}
