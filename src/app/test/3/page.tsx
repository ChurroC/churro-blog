"use client";

import { NoSSRWrapper } from "@/util/helpers/noSSRWrapper";
import { useEffect, useLayoutEffect, useState } from "react";

function wait(ms: number) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
export default function HomePage() {
    return (
        <div>
            <CheckLayoutEffectSSR />

            <NoSSRWrapper>
                <CheckLayoutEffectNoSSR />
            </NoSSRWrapper>
        </div>
    );
}

function CheckLayoutEffectNoSSR() {
    const [useEffectValue, setUseEffectValue] = useState("Before UseEffect");
    const [useLayoutEffectValue, setUseLayoutEffectValue] = useState(
        "Before UseLayoutEffect"
    );

    useLayoutEffect(() => {
        wait(2000);
        setUseEffectValue("After UseEffect");
        setUseLayoutEffectValue("After UseLayoutEffect");
    }, []);
    console.log("rendered");

    return (
        <div className="text-red-600">
            <div>{useEffectValue}</div>
            <div>{useLayoutEffectValue}</div>
        </div>
    );
}

function CheckLayoutEffectSSR() {
    const [useEffectValue, setUseEffectValue] = useState("Before UseEffect");
    const [useLayoutEffectValue, setUseLayoutEffectValue] = useState(
        "Before UseLayoutEffect"
    );

    useLayoutEffect(() => {
        wait(2000);
        setUseEffectValue("After UseEffect");
        setUseLayoutEffectValue("After UseLayoutEffect");
    }, []);
    console.log("rendered");

    return (
        <div className="text-red-600">
            <div>{useEffectValue}</div>
            <div>{useLayoutEffectValue}</div>
        </div>
    );
}
