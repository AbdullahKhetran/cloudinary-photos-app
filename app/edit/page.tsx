
// got this by console logging props
type Props = {
    searchParams: {
        publicId: string
    }
}

export default function EditPage({ searchParams }: Props) {
    const publicId = searchParams.publicId

    return (
        <div>Edit Page</div>
    )
}
