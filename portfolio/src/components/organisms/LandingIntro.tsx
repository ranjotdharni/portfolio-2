import { AnimatedLetterParams } from "../../lib/types/types";
import AnimatedText from "../molecules/AnimatedText";

let animationFirstName: AnimatedLetterParams[] = [
    {
        letter: 'R',
        delay: '200ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'    
    },
    {
        letter: 'A',
        delay: '300ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'N',
        delay: '400ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'J',
        delay: '600ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'O',
        delay: '700ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'T',
        delay: '800ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
]

let animationLastName: AnimatedLetterParams[] = [
    {
        letter: 'D',
        delay: '900ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'H',
        delay: '1000ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'A',
        delay: '1100ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'R',
        delay: '1200ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'N',
        delay: '1300ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'I',
        delay: '1400ms',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
]

export default function LandingIntro() {

    return (
        <div className="w-full h-1/2 p-4 flex flex-col justify-start items-center space-y-4 md:w-1/2 md:h-full md:justify-center">
            <p className="text-color-white font-jbm text-xl w-full text-left md:w-1/2 md:text-3xl">HELLO, MY NAME IS</p>
            <div className="w-full flex flex-row justify-start items-center space-x-4 md:w-1/2">
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={animationFirstName} />
                </div>
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={animationLastName} />
                </div>
            </div>
            <p className="text-color-light-grey w-full text-left font-jbm md:w-1/2 md:text-xl">
                I'm a full-stack web developer holding a bachelor's degree in Computer Science. I'm currently looking for a position related to IT or development. Scroll further to find out more or click the button below to contact me!
            </p>
            <div className="w-full h-10 md:w-1/2">
                <button className="bg-color-pink w-full h-full rounded-3xl text-color-white font-jbm md:w-auto md:px-4 md:py-1 md:h-auto md:text-sm">Contact Me</button>
            </div>
        </div>
    )
}