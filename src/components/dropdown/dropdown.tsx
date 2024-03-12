"use client";

import { DropdownProvider, getDropdownContext } from "@/util/contexts/dropdown";
import { DropdownPortal } from "./dropdownInPortal";

// This fits all my needs
export function DropdownContext({
    children
}: {
    children: React.ReactElement[];
}) {
    return <DropdownProvider>{children}</DropdownProvider>;
}

export function DropdownTrigger({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [isOpen, setIsOpen, referenceElement] = getDropdownContext();

    return (
        <button
            className={className}
            onClick={() => setIsOpen(!isOpen)}
            ref={referenceElement as React.RefObject<HTMLButtonElement>}
        >
            {children}
        </button>
    );
}

// Make having a refernce elment optional to position aorudn it or just use manual css
export function DropdownContent({
    children,
    className,
    referenceElement: customReferenceElement
}: {
    children: React.ReactNode;
    className?: string;
    referenceElement?: React.RefObject<HTMLElement>;
}) {
    const [isOpen, , referenceElement] = getDropdownContext();

    if (isOpen) {
        return (
            <DropdownPortal
                className={className}
                referenceElement={customReferenceElement ?? referenceElement}
            >
                {children}
            </DropdownPortal>
        );
    }

    return null;
}
