"use client";

import { useToggle } from "@/util/hooks/useToggle";
import { createContext, use, useRef } from "react";

const DropdownContext = createContext<
    [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>,
        React.RefObject<HTMLElement>
    ]
>([false, () => {}, { current: null }]);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, toggleIsOpen] = useToggle();
    const referenceElement = useRef<HTMLElement>(null);

    return (
        <DropdownContext.Provider
            value={[isOpen, toggleIsOpen, referenceElement]}
        >
            {children}
        </DropdownContext.Provider>
    );
}

export function getDropdownContext(): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.RefObject<HTMLElement>
] {
    return use(DropdownContext);
}
