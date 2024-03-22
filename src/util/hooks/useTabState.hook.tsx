"use client";

import { useEffect, useRef, useState } from "react";
import { useOnlyOnChange } from "./useOnChange.hook";

export function useTabState<StateType>(
    initalState: StateType | (() => StateType),
    key: string
): [StateType, React.Dispatch<React.SetStateAction<StateType>>] {
    const [state, setState] = useState<StateType>(initalState);

    const channel = useRef(new BroadcastChannel(key));
    const receiveMessage = useRef(false);

    useEffect(() => {
        channel.current.onmessage = ({ data }) => {
            setState(data.value);
            receiveMessage.current = true;
        };
    });

    useOnlyOnChange(() => {
        if (!receiveMessage.current) {
            channel.current.postMessage({ value: state });
        }
        receiveMessage.current = false;
    }, [state]);

    return [state, setState];
}
