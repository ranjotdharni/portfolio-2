import { AnimatedLetterParams } from "../../lib/types/types"


export default function AnimatedLetter(params: AnimatedLetterParams) {
    let css = `animate-${params.animation} ${params.tailwind}`

    return (
        <p className={`${css}`} style={{animationIterationCount: params.iterations, animationDelay: params.delay}}>
            {params.letter}
        </p>
    )
}