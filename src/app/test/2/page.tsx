"use client";

import { getTheme } from "@/util/contexts/theme";

export default function HomePage() {
    const theme = getTheme();

    return (
        <>
            <div className="h-[100px] text-neutral-700">{theme}</div>
        </>
    );
}
