"use client"

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

// only including what i need
export type UploadResult = {
  event: "success",
  info: {
    public_id: string
  }
}

export default function Home() {
  const uploadPresetId = process.env.NEXT_PUBLIC_UPLOAD_PRESET_ID;

  const [imageId, setImageId] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        uploadPreset={uploadPresetId}
        // @ts-ignore
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
      />

      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          // blurFaces // image manipulation example
          alt="Description of my image"
        />
      )}

    </main>
  )
}
