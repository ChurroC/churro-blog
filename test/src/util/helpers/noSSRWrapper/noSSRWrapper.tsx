export default function NoSSRWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

// Ending thoughts only drawback of this solution is that the component must be a direct child to the NoSSRWrapper component.
// You could extract all logic into different function then call it in the NoSSRWrapper component and then import like done in the InPortal component.
