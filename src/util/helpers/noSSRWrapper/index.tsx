import dynamic from "next/dynamic";

export const NoSSRWrapper = dynamic(
    () => import("@/util/helpers/noSSRWrapper/noSSRWrapper"),
    {
        ssr: false
    }
);
