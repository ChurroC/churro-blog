"use client";

import { HeaderIcon } from "./headerIcon";
import { SunIcon } from "@heroicons/react/24/outline";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";
import { useRef } from "react";

// Client component since local storage
export function DarkModeIcon() {
    const referenceElement = useRef(null);

    return (
        <Dropdown>
            <DropdownTrigger>
                <HeaderIcon className="w-8">
                    <SunIcon className="h-5" />
                </HeaderIcon>
                <div className="fixed top-30" ref={referenceElement}>
                    igik
                </div>
            </DropdownTrigger>
            <DropdownContent referenceElement={referenceElement}>
                <div className="bg-slate-600">wow</div>
            </DropdownContent>
        </Dropdown>
    );
}
