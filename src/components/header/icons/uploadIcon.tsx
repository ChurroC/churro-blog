import headerCSS from "@/components/header/icons/headerCSS";
import { Button } from "@/shadcn/ui/button";
import { twMerge } from "tailwind-merge";

export function UploadIcon() {
    return (
        <>
            <button className={twMerge(headerCSS, "w-8")}>Upload</button>
            <Button className="h-8 px-3 text-base font-medium">Upload</Button>
        </>
    );
}
