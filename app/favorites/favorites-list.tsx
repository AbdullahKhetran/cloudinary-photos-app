"use client"
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/force-refresh";
import { useEffect, useState } from "react";

type Prop = {
    initialResources: SearchResult[]
}

export default function FavoritesList({ initialResources }: Prop) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
        <div className="grid grid-cols-4 gap-4">
            {resources.map(r => (
                <div key={r.public_id}>
                    <CloudinaryImage
                        key={r.public_id}
                        public_id={r.public_id}
                        tags={r.tags}
                        onUnheart={(unheartedResource) => {
                            setResources((currentResources) =>
                                currentResources.filter(
                                    (resource) => resource.public_id !== unheartedResource.public_id
                                )
                            )
                        }}
                    />
                </div>
            ))}
        </div>
    )
}
