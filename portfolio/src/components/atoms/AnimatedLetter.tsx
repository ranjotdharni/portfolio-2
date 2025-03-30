import { AnimatedLetterParams } from "../../lib/types/types"
import '../../styles/animation.css'

export default function AnimatedLetter(params: AnimatedLetterParams) {
    let css = `${params.tailwind}`

    return (
        <p className={`${css} spin`} style={{animationDelay: params.delay}}>
            {params.letter}
        </p>
    )
}