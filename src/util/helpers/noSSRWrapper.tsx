import dynamic from "next/dynamic";

export default function ({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

export const NoSSRWrapper = dynamic(
    () => import("@/util/helpers/noSSRWrapper"),
    {
        ssr: false
    }
);
