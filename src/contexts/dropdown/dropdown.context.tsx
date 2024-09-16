"use client";

import { useToggle } from "@/hooks/useToggle";
import { createContext, useContext, useRef } from "react";

const DropdownContext = createContext<
    [boolean, () => void, React.RefObject<HTMLElement>]
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

export function useDropdownContext(): [
    boolean,
    () => void,
    React.RefObject<HTMLElement>
] {
    return useContext(DropdownContext);
}
