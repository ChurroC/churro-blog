import dynamic from "next/dynamic";

// This is fine to have no ssr on since there isn't that many children
// the other way to do this would be return hasMounted ? ReactDOM.createPortal(element, container) : null;
// this is much easier since we know eveything is on the client and renders on first render
export const InPortal = dynamic(
    () => import("@/components/inPortal/inPortal"),
    {
        ssr: false
    }
);
