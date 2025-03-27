import Background from "../organisms/Background";
import Contact from "../organisms/Contact";
import Experience from "../organisms/Experience";
import Landing from "../organisms/Landing";
import NavBar from "../organisms/NavBar";
import Projects from "../organisms/Projects";
import Tech from "../organisms/Tech";


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