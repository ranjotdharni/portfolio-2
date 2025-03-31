import ExperienceBoxes from '../organisms/ExperienceBoxes'
import ExperienceIntro from '../organisms/ExperienceIntro'


export default function Experience() {

    return (
        <section className="w-full h-auto z-10 pt-4 px-4 space-y-8 bg-opacity-0 md:h-screen">
            <ExperienceIntro />
            <ExperienceBoxes />
        </section>
    )
}