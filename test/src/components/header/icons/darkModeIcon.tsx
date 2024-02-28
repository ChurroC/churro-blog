"use client";

import { HeaderIcon } from "./headerIcon";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Client component since local storage
export function DarkModeIcon() {
    return (
        <HeaderIcon className="w-8">
            <SunIcon className="h-5" />
        </HeaderIcon>
    );
}
