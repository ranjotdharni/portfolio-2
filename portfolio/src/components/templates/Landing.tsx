import { navHeight, navHeightNumeric } from '../../lib/constants/layout'
import LandingGraphic from '../organisms/LandingGraphic'
import LandingIntro from '../organisms/LandingIntro'


export default function Landing() {
    let height = 100 - navHeightNumeric
    let css = `w-full z-10 overflow-visible relative top-[${navHeight}] md:flex md:flex-row`

    return (
        <section className={css} style={{height: `${height}vh`}}>
            <LandingIntro />
            <LandingGraphic />
        </section>
    )
}