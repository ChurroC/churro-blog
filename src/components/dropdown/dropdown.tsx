"use client";

import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function Dropdown({
    children,
    referenceElement,
    className
}: {
    children: React.ReactNode;
    referenceElement: RefObject<HTMLElement>;
    className?: string;
}) {
    const { top, bottom, right, left } =
        referenceElement.current?.getBoundingClientRect() ?? {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        };

    return (
        <div
            className={twMerge(`fixed`, className)}
            style={{ top, bottom, right, left }}
        >
            {children}
        </div>
    );
}
