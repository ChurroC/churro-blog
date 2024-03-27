"use client";

import { useSetTheme } from "@/util/contexts/theme";

export function Page1() {
    const setTheme = useSetTheme();

    return (
        <>
            <div>This is theme: {`theme`}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
            <button
                onClick={() => {
                    void fetch("/api/set-cookie", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ key: "theme", value: "system" })
                    });
                }}
            >
                Test
            </button>
        </>
    );
}
