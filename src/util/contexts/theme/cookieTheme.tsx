import { ThemeProvider } from "./theme.context";
import { getCookies } from "@/util/helpers/cookies/getCookies";
import type { ThemeStateProps } from "./theme.context";

export function ThemeProviderWithCookies({
    children
}: {
    children: React.ReactNode;
}) {
    const theme = getCookies<ThemeStateProps>("theme", "system");
    console.log("theme", theme);

    return <ThemeProvider cookie={theme}>{children}</ThemeProvider>;
}
