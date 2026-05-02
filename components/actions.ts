"use server"

import cloudinary from "cloudinary"

export async function addImageToAlbum(imageId: string, album: string) {
    const currentPublicId = `${imageId}`

    const targetFolder = `photos-app/${album}`
    await cloudinary.v2.api.create_folder(targetFolder);

    const imageName = imageId.split("/").pop() as string
    console.log("imagename", imageName)
    const newPublicId = `${targetFolder}/${imageName}`

    await cloudinary.v2.uploader.rename(
        currentPublicId,
        newPublicId
    )

}


export async function setAsFavorite(
    publicId: string,
    isFavorite: boolean,
) {

    if (isFavorite) {
        await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    } else {
        await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    }

}