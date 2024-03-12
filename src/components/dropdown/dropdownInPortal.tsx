import { InPortal } from "@/util/helpers/inPortal";
import { twMerge } from "tailwind-merge";
import type { RefObject } from "react";

// I can use this instead to give my own customizations to do what basically Dropdown does in one
// Use portal but have to have actual dropdown in a separate component to not run on server since inside Inportal there is NoSSRWrapper which causes children to run on client
// children but not the parent or where it is defined
export function DropdownPortal(props: {
    children: React.ReactNode;
    referenceElement?: RefObject<HTMLElement>;
    className?: string;
}) {
    console.log(props.referenceElement?.current, "dropdown");

    return (
        <InPortal>
            <DropdownInPortal
                {...props}
                referenceElement={props.referenceElement!}
            />
        </InPortal>
    );
}

// This is the actual dropdown
function DropdownInPortal({
    children,
    referenceElement,
    className
}: {
    children: React.ReactNode;
    referenceElement?: RefObject<HTMLElement>;
    className?: string;
}) {
    console.log(referenceElement?.current, "dropdown");
    const { top, bottom, right, left } =
        referenceElement?.current?.getBoundingClientRect() ?? {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        };

    const centerX = left + (right - left) / 2;

    return (
        <div
            className={twMerge(`fixed`, className)}
            style={{ left: centerX, top }}
        >
            {children}
        </div>
    );
}
