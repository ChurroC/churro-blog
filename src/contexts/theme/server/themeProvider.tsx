import { ThemeProviderWithoutProps } from "@/contexts/theme";
import { getThemeWithoutModification } from "@/util/getServerTheme";

export async function ThemeProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProviderWithoutProps serverTheme={getThemeWithoutModification()}>
            {children}
        </ThemeProviderWithoutProps>
    );
}
