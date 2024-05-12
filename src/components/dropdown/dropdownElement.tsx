"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDropdownContext } from "@/util/contexts/dropdown";
import { useEventListener } from "@/util/hooks/useEventListener";

// This is the actual dropdown
export function DropdownElement<ElementType extends React.ElementType = "ul">({
    children,
    className,
    resetCSS = false,
    as
}: React.ComponentPropsWithoutRef<ElementType> & {
    children: React.ReactNode;
    className?: string;
    resetCSS?: boolean;
    as?: ElementType;
}) {
    const Component: React.ElementType = as ?? "ul";

    const [, setIsOpen, referenceElement] = useDropdownContext();

    // When we open this element we know that the referenceElement is not null
    const [{ top, right, width }, setClientBounds] = useState(
        referenceElement.current!.getBoundingClientRect()
    );

    useEventListener("resize", () => {
        setClientBounds(referenceElement.current!.getBoundingClientRect());
    });

    const content = useRef<HTMLElement>(null);
    useEventListener("click", ({ target }: Event) => {
        if (!content.current?.contains(target as Node)) {
            setIsOpen();
        }
    });

    if (!referenceElement?.current) return null;

    return (
        <Component
            className={twMerge(
                "fixed left-0 top-0",
                !resetCSS &&
                    "fixed flex w-fit flex-col rounded-md border border-neutral-200 bg-white p-1 shadow-md",
                className
            )}
            style={{
                transform: `translate(${right - width}px, ${top + 40}px)`
            }}
            ref={content}
        >
            {children}
        </Component>
    );
}

export function DropdownItem<ElementType extends React.ElementType = "li">({
    children,
    className,
    resetCSS = false,
    as
}: React.ComponentPropsWithoutRef<ElementType> & {
    children: React.ReactNode;
    className?: string;
    resetCSS?: boolean;
    as?: ElementType;
}) {
    const Component: React.ElementType = as ?? "li";
    return (
        <Component
            className={twMerge(
                !resetCSS &&
                    "flex items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm hover:bg-zinc-100",
                className
            )}
        >
            {children}
        </Component>
    );
}
