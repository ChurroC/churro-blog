import { HeaderIcon } from "./headerIcon";
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
            <DropdownContent className="flex">
                <div className="bg-slate-600">wow</div>
            </DropdownContent>
        </Dropdown>
    );
}
