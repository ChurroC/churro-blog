export interface ThemeConfig<
    Theme extends string = "dark" | "light" | "system"
> {
    defaultTheme: Theme;
    systemLightTheme: Theme;
    systemDarkTheme: Theme;
    debounce: number;
    modifyTheme: (theme: Theme) => Theme;
}
