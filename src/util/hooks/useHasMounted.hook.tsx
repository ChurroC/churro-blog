"use client";

import { useEffect, useState } from "react";

// basic utility hook to check if the component has mounted from - Josh Comeau
// I would rather lazy load the component without srr so I don't have to worry. Since the hook end sup hiding the component during ssr and
// only runs on second render while no ssr runs on first render
// turns out though this and dynamic no ssr have the same effect the dyanmic ssr ends up making all the children not rendered with ssr.
// So this is best option even though I want to use no ssr
export function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}
// useEffect will run before hasMounted is true
// this means if you try to run code in useEffect or inital render then the data hasn't been synces yet
// this is useful to know since that means all data is synced up like in local storage if hasMounted is true
// if we wait until mount then we know data is synced since we grab data on first effect then wait until setValue finishes to then start the next useEffect for that vlaue
