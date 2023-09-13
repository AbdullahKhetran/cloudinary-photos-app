import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinary-image";
import ImageGrid from "@/components/image-grid";

export type SearchResult = {
    public_id: string
    tags: string[]
}

export default async function GalleryPage() {

    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(20)
        .execute() as { resources: SearchResult[] }

    // @ts-ignore
    console.log(result.rate_limit_remaining)

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>

                <ImageGrid images={result.resources} />

            </div>
        </section>
    )
}
