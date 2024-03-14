import { HeaderIcon } from "../headerIcon";
import { SunIcon } from "@heroicons/react/24/outline";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";

// Client component since local storage
export function DarkModeIcon() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <HeaderIcon className="w-8">
                    <SunIcon className="h-5" />
                </HeaderIcon>
            </DropdownTrigger>
            <DropdownContent className="flex w-32 flex-col">
                <button className="items-center px-2 py-1 text-sm">
                    System
                </button>
                <button className="items-center px-2 py-1 text-sm">
                    Light
                </button>
                <button className="items-center px-2 py-1 text-sm">Dark</button>
            </DropdownContent>
        </Dropdown>
    );
}
