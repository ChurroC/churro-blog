import { Children, cloneElement, isValidElement } from "react";

// Maybe a bit overcomplicated but I wanted a way to customize the props of children for stuff like className
export function propsToChildren(
    children: React.ReactNode,
    props: Record<string, string>,
    fn?: (
        childProps: Record<string, string>,
        customProps: Record<string, string>
    ) => Record<string, string>
) {
    return Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a typescript error too
        if (isValidElement<typeof props>(child)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return cloneElement(child, {
                ...props,
                ...child.props,
                ...(typeof fn !== "undefined" ? fn(child.props, props) : {})
            });
        }
        return child;
    });
}
