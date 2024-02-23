"use client";

export function HeaderIcon({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`h-8 flex justify-center items-center border rounded-md border-gray-300 fill-neutral-900 text-neutral-900 ${className}`}
        >
            {children}
        </div>
    );
}
