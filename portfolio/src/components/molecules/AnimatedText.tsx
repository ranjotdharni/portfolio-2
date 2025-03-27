import { AnimatedTextParams } from "../../lib/types/types"
import AnimatedLetter from "../atoms/AnimatedLetter"


export default function AnimatedText(params: AnimatedTextParams) {
    return (
        <>
            {
                params.text.map(letter => {
                    return <AnimatedLetter letter={letter.letter} animation={letter.animation} delay={letter.delay} iterations={letter.iterations} tailwind={letter.tailwind} />
                })
            }
        </>
    )
}