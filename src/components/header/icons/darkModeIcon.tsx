"use client";

import headerCSS from "@/components/header/icons/headerCSS";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { useTheme, type Theme } from "next-server-theme";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/shadcn/ui/dropdown-menu";

// Client component since local storage
export function DarkModeIcon() {
    const [theme, setTheme] = useTheme();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className={headerCSS}>
                {
                    {
                        light: <SunIcon className="h-5" />,
                        dark: <MoonIcon className="h-5" />,
                        system: <ComputerDesktopIcon className="h-5" />
                    }[theme]
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={7} align="end">
                {(["light", "dark", "system"] as Theme[]).map(themeOption => {
                    return (
                        <DropdownMenuItem
                            key={themeOption}
                            onClick={() => setTheme(themeOption)}
                            className={`flex items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm capitalize text-neutral-400 hover:bg-zinc-100 ${
                                theme === themeOption && "text-neutral-950"
                            }`}
                        >
                            {themeOption}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
("relative flex h-8 items-center justify-center rounded-md text-neutral-900 transition before:absolute before:inset-0 before:rounded-md before:border before:border-gray-300 before:transition hover:before:scale-110 w-8");
("relative flex h-8 items-center justify-center rounded-md text-neutral-900 transition before:absolute before:inset-0 before:rounded-md before:border before:border-gray-300 before:transition hover:before:scale-110 w-8");
