import { cookies } from "next/headers";

import { config } from "@/util/helpers/getConfig";
import { modifyTheme } from "@/util/helpers/modifyTheme";

type Theme = typeof config.defaultTheme;

export function getThemeWithoutModification(): Theme {
    const cookie = cookies().get("theme")?.value as Theme;

    const theme = cookie ? (JSON.parse(cookie) as Theme) : config.defaultTheme;

    return theme;
}

export function getServerTheme(): Theme {
    const theme = getThemeWithoutModification();

    return modifyTheme(theme);
}
