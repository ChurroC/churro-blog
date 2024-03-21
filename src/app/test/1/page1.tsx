"use client";

import { getTheme } from "@/util/contexts/theme";

export function Page1() {
    const { setTheme } = getTheme();

    return (
        <>
            <div>This is theme: {`theme`}</div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("system")}>System</button>
        </>
    );
}

// const [themeOn, setthemeOn] = useState(false);

// let [theme, setTheme]: [
//     string,
//     React.Dispatch<React.SetStateAction<ThemeStateProps>>
// ] = ["theme not turned on", () => {}];

// if (themeOn) {
//     [theme, setTheme] = getTheme();
// }

// return (
//     <>
//         <div>This is theme: {theme}</div>
//         <button onClick={() => setTheme("light")}>Light</button>
//         <button onClick={() => setTheme("dark")}>Dark</button>
//         <button onClick={() => setTheme("system")}>System</button>
//         <button onClick={() => setthemeOn(prev => !prev)}>
//             Press_To_TUrn_On_Theme
//         </button>
//         <NoSSRWrapper>
//             <Test />
//         </NoSSRWrapper>
//     </>
// );
