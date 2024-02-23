import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Wrote this myself so I consicely use component without worring about ssr
// Hopefully the return type works
export function noSSRImport<T>(
    url: string = "@/util/contexts/theme.context",
    nameExportName: string | null = null
): ComponentType<T> {
    return dynamic(
        async () => {
            if (nameExportName) {
                const { [nameExportName]: Component } = await import(
                    "@/util/contexts/theme.context"
                );
                return Component;
            }
            console.log("null");
            return await import(url);
        },
        {
            ssr: false
        }
    );
}
