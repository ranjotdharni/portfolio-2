import ExperienceContent from '../organisms/ExperienceContent'
import ExperienceIntro from '../organisms/ExperienceIntro'
import { Button } from '../ui/button'

// className="bg-color-pink w-full rounded-3xl text-color-white font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md"

export default function Experience(params: { scrollRef: React.RefObject<HTMLElement | null>, quickContact: () => void }) {

    return (
        <article ref={params.scrollRef} className="w-full h-auto z-10 pt-4 px-4 space-y-12 bg-opacity-0 flex flex-col items-center">
            <ExperienceIntro />
            <ExperienceContent />
            <Button onClick={params.quickContact}>Contact Me</Button>
        </article>
    )
}