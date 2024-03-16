"use client";

import { getTheme } from "@/util/contexts/theme";
import { twJoin, twMerge } from "tailwind-merge";
import { SunIcon } from "@heroicons/react/24/outline";
import type { themeState } from "@/util/contexts/theme";

// Add icons for light, dark, and system like tailwind or geist
export function DarkModeIconDropdown({ className }: { className?: string }) {
    const [theme, setTheme] = getTheme();

    return (
        <>
            {(["light", "dark", "system"] as themeState[]).map(themeOption => {
                return (
                    <li
                        key={themeOption}
                        onClick={() => setTheme(themeOption)}
                        className={`bg-blue-200 ${className}`}
                    >
                        {themeOption}
                    </li>
                );
            })}
        </>
    );
}
// {twJoin(
//     theme === themeOption
//         ? "text-neutral-950"
//         : "text-neutral-400",
//     "capitalize",
//     "flex items-center"
// )}

// export function DarkModeIconDropdown({ className }: { className?: string }) {
//     const [theme, setTheme] = getTheme();

//     return (
//         <>
//             {(["light", "dark", "system"] as themeState[]).map(themeOption => {
//                 return (
//                     <li
//                         key={themeOption}
//                         onClick={() => setTheme(themeOption)}
//                         className={twMerge(
//                             theme === themeOption
//                                 ? "text-neutral-950"
//                                 : "text-neutral-400",
//                             "capitalize",
//                             "flex items-center",
//                             className
//                         )}
//                     >
//                         {themeOption}
//                     </li>
//                 );
//             })}
//         </>
//     );
// }
