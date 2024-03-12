"use client";

import { createContext, use, useRef, useState } from "react";

const DropdownContext = createContext<
    [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>,
        React.RefObject<HTMLElement>
    ]
>([false, () => {}, { current: null }]);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const referenceElement = useRef<HTMLElement>(null);

    return (
        <DropdownContext.Provider value={[isOpen, setIsOpen, referenceElement]}>
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
