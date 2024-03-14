"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

// This has to be client component so we can use hook useSelectedLayoutSegment
export function MainNav({
    routes
}: {
    routes: { title: string; href: string }[];
}) {
    // Get the current segment from the router
    // Since the header is in the root layout it will be the next segement in the router
    const segment = useSelectedLayoutSegments();

    return (
        <>
            {routes.map(({ title, href }, i) => {
                return (
                    <Link
                        href={href}
                        className={`${
                            href.toUpperCase() ===
                            `/${segment.join("/")?.toUpperCase()}`
                                ? "zink-neutral-950 "
                                : "text-neutral-400"
                        } text-sm `}
                        key={i}
                    >
                        {title}
                    </Link>
                );
            })}
        </>
    );
}
