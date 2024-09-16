import { config } from "@/util/getConfig";
import { isClient } from "./isClient";

type Theme = typeof config.defaultTheme;

export function modifyTheme(theme: Theme): Theme {
    let renderedTheme = theme;

    if (theme === "system") {
        if (
            isClient() &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            renderedTheme = config.systemDarkTheme;
        } else {
            renderedTheme = config.systemLightTheme;
        }
    }

    config.modifyTheme(renderedTheme);

    return renderedTheme;
}
