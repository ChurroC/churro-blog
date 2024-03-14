"use client";

import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";
import { useEffect, useState } from "react";

// This is the actual dropdown
export function DropdownElement({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [, , referenceElement] = getDropdownContext();
    if (!referenceElement?.current) return null;
    const { top, right } = referenceElement.current.getBoundingClientRect();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        function storageChange() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", storageChange);

        return () => window.removeEventListener("resize", storageChange);
    }, []);

    return (
        <div
            className={twMerge(
                "fixed right-0 top-0 rounded-md border border-neutral-200 bg-white p-1 shadow-md",
                className
            )}
            style={{
                transform: `translate(${-(screenWidth - right)}px, ${top + 40}px)`
            }}
        >
            {children}
        </div>
    );
}
