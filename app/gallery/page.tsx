import UploadButton from "./upload-button";

export default function GalleryPage() {
    const uploadPresetId = process.env.NEXT_PUBLIC_UPLOAD_PRESET_ID;

    return (
        <section>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton />
            </div>
        </section>
    )
}
