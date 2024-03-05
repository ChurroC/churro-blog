"use client";

import { getTheme } from "@/util/contexts/theme";
import { NoSSRWrapper } from "@/util/helpers/noSSRWrapper";
import { useHasMounted } from "@/util/hooks/useHasMounted.hook";
import { useState } from "react";

export function Page1() {
    const [themeOn, setthemeOn] = useState(false);

    let [theme, setTheme]: [
        string,
        React.Dispatch<React.SetStateAction<string>>
    ] = ["theme not turned on", () => {}];

    if (themeOn) {
        [theme, setTheme] = getTheme();
    }

    return (
        <>
            <div>This is theme: {theme}</div>
            <div>
                This is directly through local storage:{" "}
                {useHasMounted() ? localStorage.getItem("theme") : "waiting"}
            </div>
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
            <div>Server side rendering is disabled</div>
            {localStorage.getItem("theme")}
        </>
    );
}
