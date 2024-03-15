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
            <DropdownContent>
                <button>Light</button>
                <button>Dark</button>
                <button>System</button>
            </DropdownContent>
        </Dropdown>
    );
}
