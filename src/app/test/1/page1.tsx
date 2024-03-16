"use client";

import { getTheme, themeState } from "@/util/contexts/theme";
import { NoSSRWrapper } from "@/util/helpers/noSSRWrapper";
import { useState } from "react";

export function Page1() {
    const [themeOn, setthemeOn] = useState(false);

    let [theme, setTheme]: [
        string,
        React.Dispatch<React.SetStateAction<themeState>>
    ] = ["theme not turned on", () => {}];

    if (themeOn) {
        [theme, setTheme] = getTheme();
    }

    return (
        <>
            <div>This is theme: {theme}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
            <button onClick={() => setthemeOn(prev => !prev)}>
                Press_To_TUrn_On_Theme
            </button>
            <NoSSRWrapper>
                <Test />
            </NoSSRWrapper>
        </>
    );
}

function Test() {
    return (
        <>
            <div className="text-neutral-700">
                Server side rendering is disabled theme:{" "}
                {localStorage.getItem("theme")}
            </div>
        </>
    );
}
