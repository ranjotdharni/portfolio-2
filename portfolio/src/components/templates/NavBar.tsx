import { navHeight } from "../../lib/constants/layout";


export default function NavBar() {

    return (
        <nav className={`w-full absolute bg-opacity-0 z-10 h-[${navHeight}] flex flex-row items-center justify-between`}>
            <p className="h-full aspect-square text-white font-jbm text-5xl flex flex-col items-center justify-center px-10">RD</p>

            <div className="w-4/5 h-full p-4 text-white flex flex-row justify-evenly items-center font-jbm text-xs md:text-lg">
                <p className="text-color-pink">Intro</p>
                <p>Details</p>
                <p>Tech</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}