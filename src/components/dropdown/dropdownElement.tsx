"use client";

import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";
import { useEventListener } from "@/util/hooks/useWindowListener";
import { useState } from "react";

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
    // const screenWidth = useSyncExternalStore(
    //     callback => {
    //         window.addEventListener("resize", callback);
    //         return () => window.removeEventListener("resize", callback);
    //     },
    //     () => window.innerWidth
    // );
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEventListener(window, "resize", () => {
        console.log("hkj");
        setScreenWidth(window.innerWidth);
    });

    console.log("rerender");
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
