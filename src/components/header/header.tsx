import Link from "next/link";
import Image from "next/image";
import nextLogo from "./nextLogo.png";
import { MainNav } from "./mainNav";
import { UploadIcon } from "./icons/uploadIcon";
import { DarkModeIcon } from "./icons/darkModeIcon";
import { GithubIcon } from "./icons/githubIcon";
import { SocialMediaIcon } from "./icons/socialMediaIcon";

// Goal to be base of vercel's nextJs and TurboPack
export function Header() {
    return (
        // Frosted glass header need white bg with .08 opacity
        <header
            className="sticky top-0 flex w-full justify-center border-b border-neutral-200 bg-white/60 px-6 backdrop-blur
                    dark:border-gray-800 dark:bg-black/80"
        >
            <nav className="flex w-full max-w-screen-xl justify-between">
                {/* Left flexbox container */}
                <div className="container flex h-16 items-center gap-6">
                    <Link href={"/"}>
                        <Image
                            src={nextLogo}
                            height={32}
                            width={155}
                            alt="Picture of the Nextjs logo"
                            className="mr-4"
                        />
                    </Link>
                    <MainNav
                        routes={[
                            {
                                title: "Docs",
                                href: "/test/1"
                            },
                            {
                                title: "Teams 23-24",
                                href: "/test/2"
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
                <div className="flex items-center justify-end gap-4">
                    <DarkModeIcon />
                    <SocialMediaIcon />
                    <GithubIcon />
                    <UploadIcon />
                </div>
            </nav>
        </header>
    );
}
