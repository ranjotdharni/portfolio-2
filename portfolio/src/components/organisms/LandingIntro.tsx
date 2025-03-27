import { AnimatedLetterParams } from "../../lib/types/types";
import AnimatedText from "../molecules/AnimatedText";

let animationFirstName: AnimatedLetterParams[] = [
    {
        letter: 'R',
        animation: 'spin',
        delay: '200ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'A',
        animation: 'spin',
        delay: '350ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'N',
        animation: 'spin',
        delay: '500ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'J',
        animation: 'spin',
        delay: '650ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'O',
        animation: 'spin',
        delay: '800ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'T',
        animation: 'spin',
        delay: '950ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
]

let animationLastName: AnimatedLetterParams[] = [
    {
        letter: 'D',
        animation: 'spin',
        delay: '1100ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'H',
        animation: 'spin',
        delay: '1250ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'A',
        animation: 'spin',
        delay: '1400ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'R',
        animation: 'spin',
        delay: '1550ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'N',
        animation: 'spin',
        delay: '1700ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
    {
        letter: 'I',
        animation: 'spin',
        delay: '1850ms',
        iterations: '1',
        tailwind: 'text-color-pink font-roboto text-3xl'
    },
]

export default function LandingIntro() {

    return (
        <div className="w-full h-1/2 p-4 flex flex-col justify-start items-center space-y-2 animate-wiggle">
            <p className="text-color-white font-jbm text-xl w-full text-left">HELLO, MY NAME IS</p>
            <div className="w-full flex flex-row justify-start items-center space-x-4">
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={animationFirstName} />
                </div>
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={animationLastName} />
                </div>
            </div>
            <p className="text-color-light-grey w-full text-left font-jbm">
                I'm a full-stack web developer holding a degree in Computer Science. I'm currently looking for a position related to IT or development.
            </p>
        </div>
    )
}