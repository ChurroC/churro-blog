"use client";
import { useTheme } from "@/util/contexts/theme.context";

export function Test() {
    const [theme, setTheme] = useTheme();

    return (
        <>
            <div>This is theme: {theme}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
        </>
    );
}
