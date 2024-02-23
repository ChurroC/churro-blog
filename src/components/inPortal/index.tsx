import dynamic from "next/dynamic";

// This is fine to have no ssr on since there isn't that many children
// the other way to do this would be return hasMounted ? ReactDOM.createPortal(element, container) : null;
// which works on useEffect so ends up only being rendered on the client
export const InPortal = dynamic(
    () => import("@/components/inPortal/inPortal"),
    {
        ssr: false
    }
);
