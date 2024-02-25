"use client";
import { useTheme } from "@/util/contexts/theme";
import { NoSSRWrapper } from "@/util/helpers/noSSRWrapper";

export function Page1() {
    const [theme, setTheme] = useTheme();

    return (
        <>
            <div>This is theme: {theme}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
            <NoSSRWrapper>
                <Test />
            </NoSSRWrapper>
        </>
    );
}

function Test() {
    return (
        <>
            <div>Server side rendering is disabled</div>
            {localStorage.getItem("theme")}
        </>
    );
}
