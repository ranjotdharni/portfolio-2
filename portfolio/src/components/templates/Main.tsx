import { useRef, useState } from "react"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import Landing from "./Landing"
import Footer from "./Footer"
import Tech from "./Tech"
import PageHeader from "./PageHeader"


export default function Main({ scrollData, scrollTo, contactMe } : { scrollData: { scrollRef: React.RefObject<HTMLElement | null> }[], scrollTo: (index: number) => void, contactMe: () => void }) {
    return (
        <>
            <PageHeader />
            
            <Landing scrollRef={scrollData[0].scrollRef} quickContact={contactMe} scrollTo={scrollTo} />
            <Experience scrollRef={scrollData[1].scrollRef} quickContact={contactMe} />
            <Tech scrollRef={scrollData[2].scrollRef} />
            <Projects scrollRef={scrollData[3].scrollRef} />
            <Contact scrollRef={scrollData[4].scrollRef} />
            
            <Footer />
        </>
    )
}
