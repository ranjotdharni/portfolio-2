import { BlobContainerParams } from '../../lib/types/types'
import '../../styles/animation.css'
import Blob from '../atoms/Blob'


export default function BlobContainer(params: BlobContainerParams) {
    let css = `aspect-square bubbleRise ${params.tailwind}`

    return (
        <div className={css} style={{animationDuration: `${params.duration}s`, animationDelay: `${params.delay}s`, left: `${params.left}%`, width: `${params.width}%`, transform: `rotate(${params.rotate}deg)`}}>
            <Blob />
        </div>
    )
}