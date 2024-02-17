"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function DashboardHeader() {
    const segment = useSelectedLayoutSegment();

    return (
        <header className="container z-40 bg-background">
            <div className="flex h-20 items-center justify-between py-6">
                <div className="flex gap-6 md:gap-10">
                    <Link
                        href="/"
                        className="hidden items-center space-x-2 md:flex"
                    >
                        <span className="hidden font-bold sm:inline-block">
                            Robotics
                        </span>
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        <Link
                            href="/dashboard"
                            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/robots"
                            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                        >
                            Robots
                        </Link>
                        <Link
                            href="/dashboard/commands"
                            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                        >
                            Commands
                        </Link>
                        <Link
                            href="/dashboard/commands"
                            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                        >
                            Settings
                        </Link>
                    </nav>
                </div>
                <nav>
                    <Link href="/login" className="px-4">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
}
