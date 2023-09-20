import cloudinary from "cloudinary"
import CloudinaryImage from "@/components/cloudinary-image";
import ImageGrid from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";


export default async function AlbumPage({ params }: { params: { album: string } }) {

    // console.log(params.album)

    const result = await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.album}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(20)
        .execute() as { resources: SearchResult[] }

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Album {params.album} </h1>
                </div>

                <ImageGrid images={result.resources}
                    getImage={(imageData: SearchResult) => {
                        return <CloudinaryImage
                            key={imageData.public_id}
                            public_id={imageData.public_id}
                            tags={imageData.tags}
                        />
                    }}
                />

            </div>
        </section>
    )
}
