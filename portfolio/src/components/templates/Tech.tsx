import TechBoxes from '../organisms/TechBoxes'
import TechIntro from '../organisms/TechIntro'


export default function Tech(params: { scrollRef: React.RefObject<HTMLElement | null> }) {

    return (
        <section ref={params.scrollRef} className="w-full h-auto z-10 pt-28 px-4 space-y-8 bg-opacity-0 md:flex md:flex-col md:items-center">
            <TechIntro />
            <TechBoxes />
            <p className="rounded-3xl w-full flex flex-row justify-center text-color-light-grey-text font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Click item to see the documentation.</p>
        </section>
    )
}