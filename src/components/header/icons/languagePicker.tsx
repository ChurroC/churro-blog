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
            <DropdownContent className="flex">
                <div className="bg-slate-600">wow</div>
            </DropdownContent>
        </Dropdown>
    );
}
