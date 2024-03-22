"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { getDropdownContext } from "@/util/contexts/dropdown";
import { propsToChildren } from "@/util/helpers/propsToChildren";
import { useEventListener } from "@/util/hooks/useEventListener";

// This is the actual dropdown
export function DropdownElement({
    children,
    className,
    noDefaultDropdownCSS = false,
    noDefaultChildrenCSS = false
}: {
    children: React.ReactNode;
    className?: string;
    noDefaultDropdownCSS?: boolean;
    noDefaultChildrenCSS?: boolean;
}) {
    const [, , referenceElement] = getDropdownContext();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    if (!referenceElement?.current) return null;

    const { top, right } = referenceElement.current.getBoundingClientRect();

    return (
        <ul
            className={twMerge(
                !noDefaultDropdownCSS &&
                    "fixed right-0 top-0 flex w-32 flex-col rounded-md border border-neutral-200 bg-white p-1 shadow-md",
                className
            )}
            style={{
                transform: `translate(${-(screenWidth - right)}px, ${top + 40}px)`
            }}
        >
            {noDefaultChildrenCSS
                ? children
                : propsToChildren(
                      children,
                      {
                          className:
                              "rounded-sm px-2 py-1.5 text-left text-sm hover:bg-zinc-100"
                      },
                      (childProps, customProps) => {
                          return {
                              className: twMerge(
                                  customProps.className,
                                  childProps.className
                              )
                          };
                      }
                  )}
        </ul>
    );
}
