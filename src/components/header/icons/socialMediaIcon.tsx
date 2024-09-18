import { HeaderIcon } from "@/components/header/icons/headerIcon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/shadcn/ui/dropdown-menu";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

// Client component since local storage
export function SocialMediaIcon() {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <HeaderIcon className="w-8">
                    {/* https://icons.getbootstrap.com/icons/instagram/ */}
                    <InstagramLogoIcon className="size-5" viewBox="0 0 15 15" />
                </HeaderIcon>
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
