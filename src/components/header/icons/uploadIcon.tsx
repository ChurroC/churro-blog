"use client";
import { Button } from "@/shadcn/ui/button";

export function UploadIcon() {
    return (
        <Button className="relative h-8 px-3 text-base font-medium before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-neutral-900 before:transition hover:before:scale-110 ">
            Upload
        </Button>
    );
}
