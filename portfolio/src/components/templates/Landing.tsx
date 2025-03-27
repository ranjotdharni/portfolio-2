import { navHeight } from "../../lib/constants/layout"
import LandingIntro from "../organisms/LandingIntro"


export default function Landing() {

    return (
        <section className={`w-full h-screen z-10 p-4 relative top-[${navHeight}]`}>
            <LandingIntro />
        </section>
    )
}