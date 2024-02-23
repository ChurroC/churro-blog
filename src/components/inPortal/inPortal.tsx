import ReactDOM from "react-dom";

export default function InPortal({
    children,
    selector = "#portal"
}: {
    children: React.ReactNode;
    selector?: string;
}) {
    console.log("InPortal: ", selector, document.querySelector(selector));
    return ReactDOM.createPortal(children, document.querySelector(selector)!);
}
