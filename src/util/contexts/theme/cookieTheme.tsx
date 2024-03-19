import { AddCookies } from "@/util/hooks/cookie/addCookie";
import { ThemeStateProps } from ".";
import { ThemeProvider } from "./theme.context";

export function ThemeProviderWithCookie({
    children
}: {
    children: React.ReactNode;
}) {
    console.log("theme");
    console.log("theme");
    return (
        <AddCookies<ThemeStateProps> cookieKey="theme" defaultValue="system">
            <ThemeProvider>{children}</ThemeProvider>
        </AddCookies>
    );
}
