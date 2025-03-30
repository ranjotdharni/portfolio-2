import { AnimatedLetterParams } from "../../lib/types/types";
import AnimatedText from "../molecules/AnimatedText";

let animationFirstName: AnimatedLetterParams[] = [
    {
        letter: 'R',
        animation: 'spin',
        delay: '200ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'    
    },
    {
        letter: 'A',
        animation: 'spin',
        delay: '350ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'N',
        animation: 'spin',
        delay: '500ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'J',
        animation: 'spin',
        delay: '650ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'O',
        animation: 'spin',
        delay: '800ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'T',
        animation: 'spin',
        delay: '950ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
]

let animationLastName: AnimatedLetterParams[] = [
    {
        letter: 'D',
        animation: 'spin',
        delay: '1100ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'H',
        animation: 'spin',
        delay: '1250ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'A',
        animation: 'spin',
        delay: '1400ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'R',
        animation: 'spin',
        delay: '1550ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'N',
        animation: 'spin',
        delay: '1700ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
    },
    {
        letter: 'I',
        animation: 'spin',
        delay: '1850ms',
        iterations: '1',
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