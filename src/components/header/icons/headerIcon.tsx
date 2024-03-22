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
                "flex h-8 items-center justify-center rounded-md border border-gray-300 fill-neutral-900 text-neutral-900",
                className
            )}
        >
            {children}
        </div>
    );
}
