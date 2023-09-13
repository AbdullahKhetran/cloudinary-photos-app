import CloudinaryImage from "@/app/gallery/cloudinary-image"
import { SearchResult } from "@/app/gallery/page"

const maxColumns = 4

type Prop = {
    images: SearchResult[]
}

export default function ImageGrid({ images }: Prop) {

    function getColumns(colIndex: number) {
        return images.filter((resource, index) => {
            return index % maxColumns === colIndex
        })
    }
    return (
        <div className="grid grid-cols-4 gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
                (column, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        {column.map(result => (
                            <CloudinaryImage
                                key={result.public_id}
                                public_id={result.public_id}
                                tags={result.tags}
                            />

                        ))}
                    </div>
                ))
            }
        </div>
    )
}
