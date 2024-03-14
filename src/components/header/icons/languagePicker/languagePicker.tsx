import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";
import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { LanguageIcon } from "@heroicons/react/24/outline";

// Client component since local storage
export function LanguagePicker() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <HeaderIcon className="w-8">
                    <LanguageIcon className="h-5" />
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
