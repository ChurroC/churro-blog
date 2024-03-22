"use client";

import { HeaderIcon } from "./headerIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";
import { getSetTheme, getTheme } from "@/util/contexts/theme";
import { twMerge } from "tailwind-merge";
import type { ThemeState } from "@/util/contexts/theme";

// Client component since local storage
export function DarkModeIcon() {
    const [theme, setTheme] = [getTheme(), getSetTheme()];

    return (
        <Dropdown>
            <DropdownTrigger>
                <HeaderIcon className="w-8">
                    {
                        {
                            light: <SunIcon className="h-5 " />,
                            dark: <MoonIcon className="h-5" />,
                            system: <ComputerDesktopIcon className="h-5" />
                        }[theme]
                    }
                </HeaderIcon>
            </DropdownTrigger>
            <DropdownContent>
                {(["light", "dark", "system"] as ThemeState[]).map(
                    themeOption => {
                        return (
                            <li
                                key={themeOption}
                                onClick={() => setTheme(themeOption)}
                                className={twMerge(
                                    "capitalize text-neutral-400",
                                    theme === themeOption && "text-neutral-950"
                                )}
                            >
                                {themeOption}
                            </li>
                        );
                    }
                )}
            </DropdownContent>
        </Dropdown>
    );
}
