import ContactSection from '../organisms/ContactSection'
import ContactIntro from '../organisms/ContactIntro'


export default function Contact(params: { scrollRef: React.RefObject<HTMLElement | null> }) {

    return (
        <section ref={params.scrollRef} className="w-full h-auto z-10 bg-opacity-0 px-4 pt-16 space-y-4">
            <ContactIntro />
            <ContactSection />
        </section>
    )
}