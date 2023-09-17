import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { FolderPlus } from "./icons/folder-plus"

export default function AddToAlbumDialog() {
    return (

        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-8 h-8 p-0">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <Dialog>
                    <DialogTrigger>
                        <div className="flex gap-2">
                            <FolderPlus />
                            Add To Album
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

// the idea to nest dialog inside dropdown was from here
// https://github.com/radix-ui/primitives/issues/1836#issuecomment-1685120352   

