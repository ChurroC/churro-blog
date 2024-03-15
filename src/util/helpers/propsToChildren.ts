import { Children, cloneElement, isValidElement } from "react";
import flattenChildren from "react-keyed-flatten-children";

import { twMerge } from "tailwind-merge";

// Child props take precedence over parent props other than className which adds
export function propsToChildren(
    children: React.ReactNode,
    props: Record<string, string>
) {
    return Children.map(
        flattenChildren(children, 0) as React.ReactNode,
        child => {
            // Checking isValidElement is the safe way and avoids a typescript error too
            if (isValidElement(child)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return cloneElement(child, {
                    ...props,
                    ...child.props,
                    className: twMerge(
                        props.className,
                        (child.props as string) || ""
                    )
                });
            }
            return child;
        }
    );
}
