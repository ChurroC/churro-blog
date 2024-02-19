"use client";

import { HeaderIcon } from "./headerIcon";
import { LanguageIcon } from "@heroicons/react/24/outline";

// Client component since local storage
export function LanguagePicker() {
    return (
        <HeaderIcon className="w-8">
            <LanguageIcon className="h-5" />
        </HeaderIcon>
    );
}
