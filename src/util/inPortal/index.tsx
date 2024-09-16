import { NoSSRWrapper } from "@/util/noSSRWrapper";
import { InPortal as Portal } from "@/util/inPortal/inPortal";

export function InPortal({ children }: { children: React.ReactNode }) {
    return (
        <NoSSRWrapper>
            <Portal>{children}</Portal>
        </NoSSRWrapper>
    );
}
