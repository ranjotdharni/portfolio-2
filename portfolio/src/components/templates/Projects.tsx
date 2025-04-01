import Carousel from '../organisms/Carousel'


export default function Projects(params: { scrollRef: React.RefObject<HTMLElement | null> }) {

    return (
        <section ref={params.scrollRef} className='w-full h-auto pt-16 z-10 space-y-4 bg-opacity-0 flex flex-col items-center'>
            <h2 className='w-auto h-auto text-3xl font-roboto text-color-white md:text-5xl'>Projects</h2>
            <Carousel />
            <p className="rounded-3xl w-full flex flex-row justify-center text-color-light-grey font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Use the arrows to navigate.</p>
        </section>
    )
}