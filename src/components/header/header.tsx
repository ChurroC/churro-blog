import Link from "next/link";
import { MainNav } from "./mainNav";

export function Header() {
    return (
        <div className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
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
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Link href={"/"}>test</Link>
                        <Link href={"/"}>test</Link>
                        <Link href={"/"}>test</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
