import { HeaderButton } from "@/components/header/icons/HeaderButton";
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
            <HeaderButton asChild>
                <DropdownMenuTrigger>
                    {/* https://icons.getbootstrap.com/icons/instagram/ */}
                    <InstagramLogoIcon className="size-5" viewBox="0 0 15 15" />
                </DropdownMenuTrigger>
            </HeaderButton>
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
