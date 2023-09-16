"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { FolderPlus } from "./icons/folder-plus"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes() {

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-8 h-8 p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem>
                        <FolderPlus />
                        <span className="ml-2">Add to Album</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
