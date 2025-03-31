import Carousel from '../organisms/Carousel'


export default function Projects() {

    return (
        <section className='w-full h-auto pt-16 z-10 space-y-4 bg-opacity-0 flex flex-col items-center'>
            <h2 className='w-auto h-auto text-3xl font-roboto text-color-white md:text-5xl'>Projects</h2>
            <Carousel />
        </section>
    )
}