import { Dropdown as DropdownElement } from "@/components/dropdown/dropdown";
import { InPortal } from "@/util/helpers/inPortal";
import { RefObject } from "react";

export function Dropdown(props: {
    children: React.ReactNode;
    referenceElement: RefObject<HTMLElement>;
    className?: string;
}) {
    return (
        <InPortal>
            <DropdownElement {...props} />
        </InPortal>
    );
}
