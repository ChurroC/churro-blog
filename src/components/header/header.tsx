import Image from "next/image";
import nextLogo from "./nextLogo.png";
import { MainNav } from "./mainNav";
import { LanguagePicker } from "./icons/languagePicker";
import { UploadIcon } from "./icons/uploadIcon";
import { DarkModeIcon } from "./icons/darkModeIcon";
import { GithubIcon } from "./icons/githubIcon";

// Goal to be base of vercel's nextJs and TurboPack
export function Header() {
    return (
        // Frosted glass header need white bg with .08 opacity
        <header className="sticky top-0 w-full border-b px-6 backdrop-blur bg-white/65 flex justify-center">
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
                                title: "Features",
                                href: "/#features"
                            },
                            {
                                title: "Pricing",
                                href: "/pricing"
                            },
                            {
                                title: "Blog",
                                href: "/blog"
                            },
                            {
                                title: "Documentation",
                                href: "/docs"
                            }
                        ]}
                    />
                </div>
                {/* Right flexbox container */}
                {/* Need light mode, lanugage, upload, github */}
                <div className="flex gap-4 items-center justify-end">
                    <LanguagePicker />
                    <DarkModeIcon />
                    <GithubIcon />
                    <UploadIcon />
                </div>
            </nav>
        </header>
    );
}
