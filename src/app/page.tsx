"use client";

import { Dropdown } from "@/components/dropdown";
import {
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown/dropdown";

export default function HomePage() {
    return (
        <>
            <div className="bg-slate-600">hi</div>
            <Dropdown>
                <div></div>
                <DropdownTrigger>PressMe</DropdownTrigger>
                <DropdownContent>Hi</DropdownContent>
            </Dropdown>
            <Dropdown>
                <div></div>
                <DropdownTrigger>PressMe</DropdownTrigger>
                <DropdownContent>Hi</DropdownContent>
            </Dropdown>
        </>
    );
}
