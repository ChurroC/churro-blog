import Link from "next/link";
import Image from "next/image";
import nextLogo from "./nextLogo.png";
import { MainNav } from "./mainNav";
import { LanguagePicker } from "./languagePicker";
import { BgColorPicker } from "./bgColorPicker";

// Goal to be base of vercel's nextJs and TurboPack
export function Header() {
    return (
        // Frosted glass header need white bg with .08 opacity
        <div className="sticky top-0 w-full border-b px-6 backdrop-blur bg-white/65 flex">
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
            <div className="flex flex-1 items-center justify-end">
                <Link href={"/"}>test</Link>
                <Link href={"/"}>
                    <LanguagePicker />
                </Link>
                <Link href={"/"}>
                    <BgColorPicker />
                </Link>
            </div>
        </div>
    );
}
