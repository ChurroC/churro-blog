import { Button } from "@/shadcn/ui/button";
import { twJoin } from "tailwind-merge";

export function HeaderButton({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    return (
        <Button
            variant={"ghost"}
            size={"icon"}
            className={twJoin(
                "relative flex size-8 items-center justify-center rounded-md text-neutral-900 transition",
                "before:absolute before:inset-0 before:rounded-md before:border before:border-gray-300 before:transition",
                "hover:bg-white hover:before:scale-110"
            )}
        >
            {children}
        </Button>
    );
}
