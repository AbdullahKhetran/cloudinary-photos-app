import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinary-image";

export type SearchResult = {
    public_id: string
    tags: string[]
}

export default async function GalleryPage() {

    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute() as { resources: SearchResult[] }

    console.log(result)

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {result.resources.map(r => (
                        <div key={r.public_id}>
                            <CloudinaryImage
                                key={r.public_id}
                                public_id={r.public_id}
                                tags={r.tags}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
