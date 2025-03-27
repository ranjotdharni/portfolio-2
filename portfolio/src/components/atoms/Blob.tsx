import { BlobParams } from "../../lib/types/types"


export default function Blob(params: BlobParams) {
    let css = `w-full h-full bg-cover bg-center bg-${params.blobId}`   // tailwind doesn't take dynamic strings, this is the workaround

    return (
        <div className={css}></div>
    )
}