"use client";

import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";

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

    // This shouldn't slow down the app since it only runs when a dropdown is pressent and somone is actively resizing the window (which is rare)
    // Only other devs would do it and for my satisfaction I wanted this to be smooth
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        function onResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
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

import { useState, useEffect } from "react";

const useScreenSize = () => {
    return screenSize;
};

export default useScreenSize;
