import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";

// This is the actual dropdown
export function DropdownElement({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [, , referenceElement] = getDropdownContext();

    const { top, right, left } =
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
            style={{ left: centerX, top: top + 30 }}
        >
            {children}
        </div>
    );
}
