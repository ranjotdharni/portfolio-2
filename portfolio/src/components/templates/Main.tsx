import { useRef, useState } from "react"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import Landing from "./Landing"
import Footer from "./Footer"
import Tech from "./Tech"
import PageHeader from "./PageHeader"


export default function Main() {
    const [inView, setInView] = useState<number>(0)

    const scrollData: { title: string, scrollRef: React.RefObject<HTMLElement | null> }[] = [
        {
            title: 'Intro',
            scrollRef: useRef<HTMLElement | null>(null)
        },
        {
            title: 'Bio',
            scrollRef: useRef<HTMLElement | null>(null)
        },
        {
            title: 'Tech',
            scrollRef: useRef<HTMLElement | null>(null)
        },
        {
            title: 'Projects',
            scrollRef: useRef<HTMLElement | null>(null)
        },
        {
            title: 'Contact',
            scrollRef: useRef<HTMLElement | null>(null)
        }
    ] 

    function contactMe() {
        setInView(4)
        scrollData[4].scrollRef.current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
    }

    return (
        <>
            <PageHeader />
            <Landing scrollRef={scrollData[0].scrollRef} quickContact={contactMe} />
            <Experience scrollRef={scrollData[1].scrollRef} quickContact={contactMe} />
            <Tech scrollRef={scrollData[2].scrollRef} />
            <Projects scrollRef={scrollData[3].scrollRef} />
            <Contact scrollRef={scrollData[4].scrollRef} />
            
            <Footer />
        </>
    )
}
