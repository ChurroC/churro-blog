import dynamic from "next/dynamic";

// stupid but only works with default imports during build
export const ThemeProvider = dynamic(
    () => import("@/util/contexts/theme/theme.context"),
    {
        ssr: false
    }
);

export { useTheme } from "./theme.context";
