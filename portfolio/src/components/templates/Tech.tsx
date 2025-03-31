import TechBoxes from "../organisms/TechBoxes";
import TechIntro from "../organisms/TechIntro";


export default function Tech() {

    return (
        <section className="w-full h-auto z-10 pt-16 px-4 space-y-8 bg-opacity-0 md:flex md:flex-col md:items-center">
            <TechIntro />
            <TechBoxes />
        </section>
    )
}