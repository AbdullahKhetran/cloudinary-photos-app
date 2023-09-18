import { SearchResult } from "@/app/gallery/page"
import AddToAlbumDialog from "@/components/add-to-album-dialog"

type Prop = {
    imageId: string
}
export function DropdownMenuCheckboxes({ imageId }: Prop) {
    return (
        <div className="absolute top-2 right-2">
            <AddToAlbumDialog imageId={imageId} />
        </div>
    )
}