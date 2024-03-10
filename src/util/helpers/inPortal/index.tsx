import { NoSSRWrapper } from "@/util/helpers/noSSRWrapper";
import { InPortal as Portal } from "@/util/helpers/inPortal/inPortal";

export function InPortal({ children }: { children: React.ReactNode }) {
    return (
        <NoSSRWrapper>
            <Portal>{children}</Portal>
        </NoSSRWrapper>
    );
}
