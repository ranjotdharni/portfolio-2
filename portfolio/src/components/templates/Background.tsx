import { randomIntegerInclusive } from '../../lib/utils/functions'
import { BlobContainerParams } from '../../lib/types/types'
import { BLOB_COUNT } from '../../lib/constants/layout'
import BlobContainer from '../molecules/BlobContainer'
import { useState } from 'react'

export default function Background() {
    const [blobs, setBlobs] = useState<BlobContainerParams[]>(Array(BLOB_COUNT).fill(0))

    return (
        <div className="z-0 w-full h-full absolute bg-color-bg overflow-hidden">
            {
                blobs.map((blob, index) => {
                    return <BlobContainer key={`${blob}BlobContainer${index}`} duration={randomIntegerInclusive(25, 120)} delay={-45} left={randomIntegerInclusive(0, 100)} width={randomIntegerInclusive(2, 5)} rotate={randomIntegerInclusive(0, 360)} tailwind='absolute top-[100%]' />
                })
            }
        </div>
    )
}