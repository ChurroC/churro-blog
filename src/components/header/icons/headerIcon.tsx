import { twMerge } from "tailwind-merge";

// Mabe make hits polhmorphic
export function HeaderIcon({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                "relative flex h-8 items-center justify-center rounded-md text-neutral-900 transition",
                "after:absolute after:inset-0 after:rounded-md after:border after:border-gray-300 after:transition",
                "hover:after:scale-125",
                className
            )}
        >
            {children}
        </div>
    );
}
