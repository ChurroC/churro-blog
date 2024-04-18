"use client";

import { DropdownProvider, getDropdownContext } from "@/util/contexts/dropdown";
import { InPortal } from "@/util/helpers/inPortal";
import { DropdownElement } from "./dropdownElement";

// Cannot be nested
export function DropdownContext({
    children
}: {
    children: React.ReactElement[];
}) {
    return <DropdownProvider>{children}</DropdownProvider>;
}

export function DropdownTrigger<
    ElementType extends React.ElementType = "button"
>({
    children,
    className,
    as
}: React.ComponentPropsWithoutRef<ElementType> & {
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}) {
    const Component: React.ElementType = as ?? "button";
    const [isOpen, setIsOpen, referenceElement] = getDropdownContext();

    return (
        <Component
            className={className}
            onClick={() => setIsOpen(!isOpen)}
            ref={referenceElement}
        >
            {children}
        </Component>
    );
}

// I can use this instead to give my own customizations to do what basically Dropdown does in one
// Use portal but have to have actual dropdown in a separate component to not run on server since inside Inportal there is NoSSRWrapper which causes children to run on client
// children but not the parent or where it is defined
export function DropdownContent(props: {
    children: React.ReactNode;
    className?: string;
    noDefaultDropdownCSS?: boolean;
    noDefaultChildrenCSS?: boolean;
}) {
    const [isOpen] = getDropdownContext();

    return isOpen ? (
        <InPortal>
            <DropdownElement {...props} />
        </InPortal>
    ) : null;
}
