"use client"
import Heart from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { setAsFavorite } from "./actions"
import { useTransition } from "react"
import { SearchResult } from "./page"
import FullHeart from "@/components/icons/full-heart"

export default function CloudinaryImage({ public_id, tags }: SearchResult) {
    const [transition, startTransition] = useTransition()
    const isFavorited = tags.includes("favorite")

    return (
        <div className="relative">
            <CldImage
                width="400"
                height="300"
                src={public_id}
                sizes="100vw"
                alt="Description of my image"
            />
            {isFavorited
                ? <FullHeart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavorite(public_id, false)
                        })
                    }}
                    className="absolute top-2 right-2 text-red-500 hover:text-white cursor-pointer " />
                : <Heart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavorite(public_id, true)
                        })
                    }}
                    className="absolute top-2 right-2 hover:text-red-500 cursor-pointer " />
            }
        </div>
    )
}
