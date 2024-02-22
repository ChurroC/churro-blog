import { useEffect, useState } from "react";

// basic utility hook to check if the component has mounted from - Josh Comeau
export function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}
