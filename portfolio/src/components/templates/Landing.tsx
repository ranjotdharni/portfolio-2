import LandingGraphic from '../organisms/LandingGraphic'
import { navHeight } from '../../lib/constants/layout'
import LandingIntro from '../organisms/LandingIntro'


export default function Landing(params: { scrollRef: React.RefObject<HTMLElement | null>, quickContact: () => void }) {
    let css = `w-full h-[100vh] z-10 overflow-visible relative top-[${navHeight}] md:top-0 md:flex md:flex-row`

    return (
        <section ref={params.scrollRef} className={css}>
            <LandingIntro quickContact={params.quickContact} />
            <LandingGraphic />
        </section>
    )
}