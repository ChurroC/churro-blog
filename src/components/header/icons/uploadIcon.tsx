import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { Button } from "@/shadcn/ui/button";

export function UploadIcon() {
    return (
        <>
            <HeaderIcon className="bg-neutral-900 px-2 font-medium text-white after:border-0 ">
                <button>Upload</button>
            </HeaderIcon>
            <Button className="h-8 px-3 text-base font-medium">Upload</Button>
        </>
    );
}
