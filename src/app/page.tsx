"use client";

import { Dropdown } from "@/components/dropdown";
import { useRef } from "react";

export default function HomePage() {
    const referenceElement = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="bg-slate-600" ref={referenceElement}>
                hi
            </div>
            <Dropdown referenceElement={referenceElement}>
                <div className="bg-slate-600">wow</div>
            </Dropdown>
        </>
    );
}
