"use client";

import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { InPortal } from "@/util/helpers/inPortal";
import { LanguageIcon } from "@heroicons/react/24/outline";

// Client component since local storage
export function LanguagePicker() {
    return (
        <HeaderIcon className="w-8">
            {/* {localStorage.getItem("theme")} */}
            {/* <InPortal>
                <div className="absolute top-12 right-0 w-48 bg-white dark:bg-black border dark:border-gray-800 rounded-md shadow-lg">
                    <button>English</button>
                    <button>Spanish</button>
                    <button>French</button>
                </div>
            </InPortal> */}
            <LanguageIcon className="h-5" />
        </HeaderIcon>
    );
}

{
    /* <InPortal>
<div className="absolute top-12 right-0 w-48 bg-white dark:bg-black border dark:border-gray-800 rounded-md shadow-lg">
    <button>English</button>
    <button>Spanish</button>
    <button>French</button>
    {test}
</div>
</InPortal> */
}
