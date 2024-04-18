import { twMerge } from "tailwind-merge";

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
                "hover:after:scale-105",
                className
            )}
        >
            {children}
        </div>
    );
}
