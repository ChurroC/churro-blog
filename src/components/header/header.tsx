import Image from "next/image";
import nextLogo from "./nextLogo.png";
import { MainNav } from "./mainNav";
import { LanguagePicker } from "./icons/languagePicker";
import { UploadIcon } from "./icons/uploadIcon";
import { DarkModeIcon } from "./icons/darkModeIcon";
import { GithubIcon } from "./icons/githubIcon";

// Goal to be base of vercel's nextJs and TurboPack
export function Header() {
    console.log("header");
    return (
        // Frosted glass header need white bg with .08 opacity
        <header
            className="sticky top-0 w-full border-b px-6 backdrop-blur flex justify-center bg-white/65
        dark:bg-black/80 dark:border-gray-800"
        >
            <nav className="flex justify-between max-w-screen-xl w-full">
                {/* Left flexbox container */}
                <div className="container flex h-16 items-center gap-6">
                    <Image
                        src={nextLogo}
                        height={32}
                        width={155}
                        alt="Picture of the Nextjs logo"
                        className="mr-4"
                    />
                    <MainNav
                        routes={[
                            {
                                title: "Teams 23-24",
                                href: "/current-robots"
                            },
                            {
                                title: "Team Archive",
                                href: "/pricing"
                            },
                            {
                                title: "Blog",
                                href: "/blog"
                            }
                        ]}
                    />
                </div>
                {/* Right flexbox container */}
                {/* Need light mode, lanugage, upload, github */}
                <div className="flex gap-4 items-center justify-end ">
                    <LanguagePicker />
                    <DarkModeIcon />
                    <GithubIcon />
                    <UploadIcon />
                </div>
            </nav>
        </header>
    );
}
