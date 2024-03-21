"use client";

import { getSetTheme } from "@/util/contexts/theme";

export function Page1() {
    const setTheme = getSetTheme();

    return (
        <>
            <div>This is theme: {`theme`}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
        </>
    );
}
