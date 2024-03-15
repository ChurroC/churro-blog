"use client";

import { getTheme } from "@/util/contexts/theme";
import type { themeState } from "@/util/contexts/theme";

// Add icons for light, dark, and system like tailwind or geist
export function DarkModeIconDropdown() {
    const [theme, setTheme] = getTheme();

    return (
        <>
            {(["light", "dark", "system"] as themeState[]).map(themeOption => {
                return (
                    <button
                        key={themeOption}
                        onClick={() => setTheme(themeOption)}
                        className={
                            theme === themeOption
                                ? "text-neutral-950"
                                : "text-neutral-400"
                        }
                    >
                        {themeOption}
                    </button>
                );
            })}
        </>
    );
}
