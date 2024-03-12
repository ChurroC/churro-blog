"use client";

import { useToggle } from "@/util/hooks/useToggle";
import { createContext, use, useRef } from "react";

const DropdownContext = createContext<
    [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>,
        React.RefObject<HTMLButtonElement>
    ]
>([false, () => {}, { current: null }]);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, toggleIsOpen] = useToggle();
    const referenceElement = useRef<HTMLButtonElement>(null);

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
    React.RefObject<HTMLButtonElement>
] {
    return use(DropdownContext);
}
