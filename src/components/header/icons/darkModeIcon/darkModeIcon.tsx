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
                <div className="items-center px-2 py-1 text-sm">System</div>
                <div className="items-center px-2 py-1 text-sm">Light</div>
                <div className="items-center px-2 py-1 text-sm">Dark</div>
            </DropdownContent>
        </Dropdown>
    );
}
