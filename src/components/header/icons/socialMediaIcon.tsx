import headerCSS from "@/components/header/icons/headerCSS";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/shadcn/ui/dropdown-menu";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

// Client component since local storage
export function SocialMediaIcon() {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className={twMerge(headerCSS, "w-8")}>
                {/* https://icons.getbootstrap.com/icons/instagram/ */}
                <InstagramLogoIcon className="size-5" viewBox="0 0 15 15" />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={7} align="end">
                {["Instagram", "Facebook", "Youtube"].map(socialMedia => {
                    return (
                        <DropdownMenuItem
                            key={socialMedia}
                            className="flex justify-between"
                        >
                            {socialMedia}
                            <InstagramLogoIcon
                                className="size-5"
                                viewBox="0 0 15 15"
                            />
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
