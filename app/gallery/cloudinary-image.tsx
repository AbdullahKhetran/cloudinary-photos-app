"use client"
import Heart from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { setAsFavorite } from "./actions"
import { useTransition } from "react"

type Props = {
    publicId: string
}
export default function CloudinaryImage({ publicId }: Props) {
    const [transition, startTransition] = useTransition()

    return (
        <div className="relative">
            <CldImage
                width="400"
                height="300"
                src={publicId}
                sizes="100vw"
                alt="Description of my image"
            />
            <Heart
                onClick={() => {
                    startTransition(() => {
                        setAsFavorite(publicId)
                    })
                }}
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer " />
        </div>
    )
}
