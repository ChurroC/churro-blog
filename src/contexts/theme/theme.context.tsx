"use client";

import { isClient } from "@/util/isClient";
import { useCookies } from "@/hooks/useCookies.hook";
import { useEventListener } from "@/hooks/useEventListener";
import { useOnChange } from "@/hooks/useOnChange.hook";
import { useReferenceState } from "@/hooks/useReferenceState.hook";
import { createContext, useContext } from "react";
import { modifyTheme } from "@/util/modifyTheme";

import { config } from "@/util/getConfig";
type Theme = typeof config.defaultTheme;

const ThemeContext = createContext<Theme>("" as Theme);
const SetThemeContext = createContext<
    React.Dispatch<React.SetStateAction<Theme>>
>(() => {});

export function ThemeProviderWithoutProps({
    children,
    serverTheme
}: {
    children: React.ReactNode;
    serverTheme: Theme;
}) {
    const [theme, setTheme] = useCookies<Theme>(
        "theme",
        serverTheme,
        config.debounce ?? 0
    );

    const themeReference = useReferenceState(theme);
    useEventListener(
        "change",
        ({ matches }: MediaQueryListEventInit) => {
            if (themeReference.current === "system") {
                if (matches)
                    document.documentElement.className = config.systemDarkTheme;
                else
                    document.documentElement.className =
                        config.systemLightTheme;
            }
        },
        isClient() ? window.matchMedia("(prefers-color-scheme: dark)") : null
    );

    useOnChange(() => {
        document.documentElement.className = modifyTheme(theme);
    }, [theme]);

    return (
        <SetThemeContext.Provider value={setTheme}>
            <ThemeContext.Provider value={theme}>
                {serverTheme === "system" && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(() => {
                                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                                    document.documentElement.className = "${config.systemDarkTheme}";
                                } else {
                                    document.documentElement.className = "${config.systemLightTheme}";
                                }
                            })()`
                        }}
                    />
                )}
                {children}
            </ThemeContext.Provider>
        </SetThemeContext.Provider>
    );
}

export function useTheme() {
    return [useContext(ThemeContext), useContext(SetThemeContext)];
}

export function useGetTheme() {
    return useContext(ThemeContext);
}
export function useSetTheme() {
    return useContext(SetThemeContext);
}
