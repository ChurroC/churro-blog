"use client";

import { useHasMounted } from "@/hooks/useHasMounted.hook";

export function NoSSRWrapper({ children }: { children: React.ReactNode }) {
    return useHasMounted() ? <>{children}</> : null;
}
