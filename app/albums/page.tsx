
import cloudinary from "cloudinary"
import { AlbumCard } from "./album-card";

export type Folder = {
    name: string,
    path: string
}

export default async function AlbumsPage() {

    const foldersResult = await cloudinary.v2.api.root_folders()
    // console.log(foldersResult)

    const folders: Folder[] = foldersResult.folders
    // console.log(folders)

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Albums</h1>


                </div>

                <div className="grid grid-cols-3 gap-4">
                    {folders.map((folder) => (
                        <AlbumCard folder={folder} key={folder.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}
