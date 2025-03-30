import { AnimatedTextParams } from "../../lib/types/types"
import AnimatedLetter from "../atoms/AnimatedLetter"


export default function AnimatedText(params: AnimatedTextParams) {
    return (
        <>
            {
                params.text.map((letter, index) => {
                    return <AnimatedLetter key={`AnimatedIntroText${index}`} letter={letter.letter} animation={params.animationClass} delay={letter.delay} tailwind={letter.tailwind} />
                })
            }
        </>
    )
}