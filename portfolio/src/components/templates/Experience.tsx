import ExperienceBoxes from '../organisms/ExperienceBoxes'
import ExperienceIntro from '../organisms/ExperienceIntro'


export default function Experience(params: { scrollRef: React.RefObject<HTMLElement | null>, quickContact: () => void }) {

    return (
        <section ref={params.scrollRef} className="w-full h-auto z-10 pt-4 px-4 space-y-12 bg-opacity-0 md:flex md:flex-col md:items-center">
            <ExperienceIntro />
            <ExperienceBoxes />
            <button onClick={params.quickContact} className="bg-color-pink w-full rounded-3xl text-color-white font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Contact Me</button>
        </section>
    )
}