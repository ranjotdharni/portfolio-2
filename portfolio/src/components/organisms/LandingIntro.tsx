import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export default function LandingIntro({ scrollTo, quickContact } : { scrollTo: (index: number) => void, quickContact: () => void }) {

    return (
    <section className="flex flex-col lg:items-center lg:justify-center lg:flex-row min-h-screen w-full lg:w-full">
      
        <div className="flex flex-col justify-start px-8 lg:w-1/2 lg:px-16 xl:px-28">
            <h1 className='relative bottom-30 font-bold text-primary text-5xl'>Welcome to my Portfolio</h1>

            <div className="space-y-6 w-full">
                <p className="text-xl text-muted-foreground">
                    HELLO, MY NAME IS
                </p>

                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Ranjot Dharni
                </h2>

                <Separator className="my-2" />

                <p className="leading-7 text-muted-foreground">
                    I'm a full-stack web developer holding a Bachelor's degree in Computer Science. 
                    I'm currently looking for a full-time position in the tech industry. Use the 
                    sidebar to navigate the site or scroll further if you're on mobile to see 
                    more of my work!
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <Button size="lg" onClick={() => scrollTo(1)}>Explore</Button>
                    <Button size="lg" variant="outline" onClick={quickContact}>Contact Me</Button>
                </div>
            </div>

        </div>

        <div className="flex items-center justify-center lg:h-3/4 lg:w-1/2">
            <iframe src='https://my.spline.design/roomrelaxingcopy-d771332ca2c1b974dd9708b657ea7f99/' width='100%' height='100%'></iframe>
        </div>

    </section>
  )
}
