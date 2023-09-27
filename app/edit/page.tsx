"use client"

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

// got this by console logging props
type Props = {
    searchParams: {
        publicId: string
    }
}

export default function EditPage({ searchParams }: Props) {
    const publicId = searchParams.publicId
    const [transformation, setTransformation] = useState<undefined | "generative-fill">()

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Edit {publicId}</h1>
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                        Clear All
                    </Button>

                    <Button onClick={() => setTransformation("generative-fill")}>
                        Generative Fill
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicId}
                        alt="Edit your image"
                        width={300}
                        height={200}
                    />

                    {transformation === "generative-fill" &&
                        <CldImage
                            src={publicId}
                            alt="Edit your image"
                            width={300}
                            height={200}
                            crop="pad" // Returns the given size with padding
                            fillBackground // Uses AI to extend image
                        />
                    }
                </div>
            </div>
        </section>
    )
}
