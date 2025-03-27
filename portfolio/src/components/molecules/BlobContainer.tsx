import { BlobContainerParams } from "../../lib/types/types";
import Blob from "../atoms/Blob";


export default function BlobContainer(params: BlobContainerParams) {
    let css = `aspect-square ${params.tailwind}`

    return (
        <div className={css}>
            {
                Blob(params.blob)
            }
        </div>
    )
}