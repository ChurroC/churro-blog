"use client";

import { useGetTheme } from "@/util/contexts/theme";

export default function HomePage() {
    const theme = useGetTheme();

    return (
        <>
            <div className="h-[100px] text-neutral-700">{theme}</div>
        </>
    );
}
