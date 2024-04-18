"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";
import { useEventListener } from "@/util/hooks/useEventListener";

// This is the actual dropdown
export function DropdownElement<ElementType extends React.ElementType = "ul">({
    children,
    className,
    noDefaultDropdownCSS = false,
    as
}: React.ComponentPropsWithoutRef<ElementType> & {
    children: React.ReactNode;
    className?: string;
    noDefaultDropdownCSS?: boolean;
    as?: ElementType;
}) {
    const Component: React.ElementType = as ?? "ul";

    const [, setIsOpen, referenceElement] = getDropdownContext();

    // When we open this element we know that the referenceElement is not null
    const [{ top, right }, setClientBounds] = useState(
        referenceElement?.current?.getBoundingClientRect()!
    );

    useEventListener("resize", () => {
        setClientBounds(referenceElement?.current?.getBoundingClientRect()!);
    });

    const content = useRef<HTMLElement>(null);
    useEventListener("click", ({ target }: Event) => {
        if (content.current && !content.current.contains(target as Node)) {
            setIsOpen(false);
        }
    });

    if (!referenceElement?.current) return null;

    return (
        <Component
            className={twMerge(
                !noDefaultDropdownCSS &&
                    "fixed left-0 top-0 flex w-32 flex-col rounded-md border border-neutral-200 bg-white p-1 shadow-md",
                className
            )}
            style={{
                transform: `translate(${right - referenceElement.current.getBoundingClientRect().width}px, ${top + 40}px)`
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
    as,
    ...props
}: React.ComponentPropsWithoutRef<ElementType> & {
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}) {
    const Component: React.ElementType = as ?? "li";
    return (
        <Component
            className={twMerge(
                "rounded-sm px-2 py-1.5 text-left text-sm hover:bg-zinc-100",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
