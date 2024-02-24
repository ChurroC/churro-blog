import { createPortal } from "react-dom";
import { NoSSRWrapper } from "./noSSRWrapper";

export default function InPortal({
    children,
    selector = "#portal"
}: {
    children: React.ReactNode;
    selector?: string;
}) {
    return (
        <NoSSRWrapper>
            {createPortal(children, document.querySelector(selector)!)}
        </NoSSRWrapper>
    );
}
