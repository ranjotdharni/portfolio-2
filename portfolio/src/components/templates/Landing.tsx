import LandingGraphic from "../organisms/LandingGraphic"
import { navHeight, navHeightNumeric } from "../../lib/constants/layout"
import LandingIntro from "../organisms/LandingIntro"


export default function Landing() {
    let height = 100 - navHeightNumeric
    let css = `w-full z-10 overflow-visible relative top-[${navHeight}]`

    return (
        <section className={css} style={{height: `${height}vh`}}>
            <LandingIntro />
            <LandingGraphic />
        </section>
    )
}