"use client";

export function Dropdown() {
    const theme = localStorage.getItem("theme");
    return <div>{theme}</div>;
}
