import { BlobParams } from "../../lib/types/types";


export default function Blob(params: BlobParams) {
    let css = `w-full h-full bg-${params.blobId}`   // tailwind doesn't take dynamic string, this is the workaround

    return (
        <div className={css}></div>
    )
}