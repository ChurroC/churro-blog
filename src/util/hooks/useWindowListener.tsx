"use client";

import { useEffect } from "react";

export function useEventListener<T extends Event>(
    eventType: string,
    listener: (evt: T) => void,
    element?: EventTarget | null
) {
    useEffect(() => {
        console.log("hk");
        (element || window)?.addEventListener(
            eventType,
            listener as EventListener
        );
        return () =>
            (element || window)?.removeEventListener(
                eventType,
                listener as EventListener
            );
    }, []);
}
//element.removeEventListener(eventType, listener);
