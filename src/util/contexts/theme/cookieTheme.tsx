import { ThemeProvider } from "./theme.context";
import { getCookies } from "@/util/helpers/cookies/getCookies";
import type { ThemeStateProps } from "./theme.context";

export function ThemeProviderWithCookies({
    children
}: {
    children: React.ReactNode;
}) {
    // What would happen if page didn't close and the theme was changed but then another page was opeend
    const theme = getCookies<ThemeStateProps>("theme", "system");
    console.log("theme", theme);

    return <ThemeProvider cookie={theme}>{children}</ThemeProvider>;
}
