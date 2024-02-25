"use client";

export function PortalStuff() {
    return (
        <>
            {/* Can't see text for div in POrtal since clases don't affect this portal */}
            <div>IN pORTAL</div>
            <div className="text-neutral-700">Can see this</div>
            <div>{localStorage.getItem("theme")}</div>
        </>
    );
}
