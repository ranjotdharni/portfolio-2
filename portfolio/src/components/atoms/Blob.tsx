import { randomIntegerInclusive } from '../../lib/utils/functions'
import Blob0 from '../../assets/images/blobs/blob0.png'
import Blob1 from '../../assets/images/blobs/blob1.png'
import Blob2 from '../../assets/images/blobs/blob2.png'
import Blob3 from '../../assets/images/blobs/blob3.png'
import Blob4 from '../../assets/images/blobs/blob4.png'
import Blob5 from '../../assets/images/blobs/blob5.png'
import Blob6 from '../../assets/images/blobs/blob6.png'
import Blob7 from '../../assets/images/blobs/blob7.png'
import Blob8 from '../../assets/images/blobs/blob8.png'
import Blob9 from '../../assets/images/blobs/blob9.png'
import { useState } from 'react'

const blobs = [
    Blob0,
    Blob1,
    Blob2,
    Blob3,
    Blob4,
    Blob5,
    Blob6,
    Blob7,
    Blob8,
    Blob9
]

export default function Blob() {
    const [blob] = useState<string>(blobs[randomIntegerInclusive(0, blobs.length - 1)])

    let css = `w-full h-full`

    return (
        <img src={blob} className={css} />
    )
}