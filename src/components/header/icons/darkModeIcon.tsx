"use client";

import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import {
    Dropdown,
    DropdownContent,
    DropdownTrigger
} from "@/components/dropdown";
import { useGetTheme, useSetTheme } from "@/util/contexts/theme";
import { type Theme } from "@/util/contexts/theme";
import { twMerge } from "tailwind-merge";
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';
import {FocusScope} from 'react-aria';


// Client component since local storage
export function DarkModeIcon() {
    const [theme, setTheme] = [useGetTheme(), useSetTheme()];

    return (
        // <Dropdown>
        //     <DropdownTrigger>
        //         <HeaderIcon className="w-8">
        //             {
        //                 {
        //                     light: <SunIcon className="h-5" />,
        //                     dark: <MoonIcon className="h-5" />,
        //                     system: <ComputerDesktopIcon className="h-5" />
        //                 }[theme]
        //             }
        //         </HeaderIcon>
        //     </DropdownTrigger>
        //     <DropdownContent>
        //         {(["light", "dark", "system"] as Theme[]).map(themeOption => {
        //             return (
        //                 <li
        //                     key={themeOption}
        //                     onClick={() => setTheme(themeOption)}
        //                     className={twMerge(
        //                         "capitalize text-neutral-400",
        //                         theme === themeOption && "text-neutral-950"
        //                     )}
        //                 >
        //                     {themeOption}
        //                 </li>
        //             );
        //         })}
        //     </DropdownContent>
        // </Dropdown>
        // <MenuTrigger>
        //   <Button aria-label="Menu">☰</Button>
        //   <Popover>
        //     <Menu>
        //       <MenuItem onAction={() => alert('open')}>Open</MenuItem>
        //       <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
        //       <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
        //       <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
        //       <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
        //     </Menu>
        //   </Popover>
        // </MenuTrigger>
        
        <>
          <MenuTrigger>
          <Button aria-label="Menu">☰</Button>
          <Popover isNonModal>
            <Menu>
              <MenuItem onAction={() => alert('open')}>Open</MenuItem>
              <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
              <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
              <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
              <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </>
    );
}
