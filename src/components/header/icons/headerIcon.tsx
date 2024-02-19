export function HeaderIcon({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`h-8 flex justify-center items-center border rounded-md border-gray-300 ${className}`}
        >
            {children}
        </div>
    );
}
