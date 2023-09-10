"use client"

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
    const uploadPresetId = process.env.NEXT_PUBLIC_UPLOAD_PRESET_ID;

    return (
        <section>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                {/* <Button > */}
                <Button asChild>
                    <div className="flex gap-2">
                        <span>icon</span>
                        <CldUploadButton
                            uploadPreset={uploadPresetId}
                            // @ts-ignore
                            onUpload={(result: UploadResult) => {
                                //   setImageId(result.info.public_id);
                            }}
                        />
                    </div>
                </Button>
            </div>
        </section>
    )
}
