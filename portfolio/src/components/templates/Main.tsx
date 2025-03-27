import Background from "./Background"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import Landing from "./Landing"
import NavBar from "./NavBar"
import Tech from "./Tech"


export default function Main() {

    return (
        <>
            <main className="w-full flex flex-col relative">
                <Background />

                <NavBar />

                <Landing />
                <Experience />
                <Tech />
                <Projects />
                <Contact />
            </main>
        </>
    )
}