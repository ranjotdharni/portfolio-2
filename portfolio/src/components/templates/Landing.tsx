import { navHeight } from '../../lib/constants/layout'
import LandingGraphic from '../organisms/LandingGraphic'
import LandingIntro from '../organisms/LandingIntro'


export default function Landing() {
    let css = `w-full h-[100vh] z-10 overflow-visible relative top-[${navHeight}] md:top-0 md:flex md:flex-row`

    return (
        <section className={css}>
            <LandingIntro />
            <LandingGraphic />
        </section>
    )
}