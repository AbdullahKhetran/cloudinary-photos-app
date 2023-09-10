"use client"
import { CldImage } from "next-cloudinary"

type Props = {
    publicId: string
}
export default function CloudinaryImage({ publicId }: Props) {
    return (
        <CldImage
            width="400"
            height="300"
            src={publicId}
            sizes="100vw"
            alt="Description of my image"
        />
    )
}
