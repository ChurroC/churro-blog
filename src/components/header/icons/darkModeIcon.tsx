"use client";

import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { useTheme, type Theme } from "next-server-theme";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// Client component since local storage
export function DarkModeIcon() {
    const [theme, setTheme] = useTheme();

    return (
        <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger>
                <HeaderIcon className="w-8">
                    {
                        {
                            light: <SunIcon className="h-5" />,
                            dark: <MoonIcon className="h-5" />,
                            system: <ComputerDesktopIcon className="h-5" />
                        }[theme]
                    }
                </HeaderIcon>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="flex w-fit flex-col rounded-md border border-neutral-200 bg-white p-1 shadow-md">
                    {(["light", "dark", "system"] as Theme[]).map(
                        themeOption => {
                            return (
                                <DropdownMenu.Item
                                    key={themeOption}
                                    onClick={() => setTheme(themeOption)}
                                    className={`flex items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm capitalize text-neutral-400 hover:bg-zinc-100 ${
                                        theme === themeOption &&
                                        "text-neutral-950"
                                    }`}
                                >
                                    {themeOption}
                                </DropdownMenu.Item>
                            );
                        }
                    )}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
