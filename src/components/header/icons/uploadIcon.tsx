import headerCSS from "@/components/header/icons/headerCSS";
import { Button } from "@/shadcn/ui/button";
import { twMerge } from "tailwind-merge";

export function UploadIcon() {
    return (
        <>
            <button
                className={twMerge(
                    "relative size-8 px-3 text-base font-medium before:absolute before:inset-0 before:-z-10 before:bg-neutral-900 hover:before:scale-150"
                )}
            >
                Upload
            </button>
            <Button className="relative h-8 px-3 text-base font-medium before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-neutral-900 before:transition hover:before:scale-110 ">
                Upload
            </Button>
            <Button
                className={twMerge(
                    "relative h-8 px-3 text-base font-medium before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-neutral-900 before:transition hover:before:scale-110 "
                )}
            >
                Upload
            </Button>
        </>
    );
}
