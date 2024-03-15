import { HeaderIcon } from "../headerIcon";
import { SunIcon } from "@heroicons/react/24/outline";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";
import { DarkModeIconDropdown } from "./darkModeIconDropdown";

// Client component since local storage
export function DarkModeIcon() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <HeaderIcon className="w-8">
                    <SunIcon className="h-5" />
                </HeaderIcon>
            </DropdownTrigger>
            <DropdownContent>
                <DarkModeIconDropdown />
            </DropdownContent>
        </Dropdown>
    );
}
