import { useEffect, useState } from "react";
import { AnimatedLetterParams } from "../../lib/types/types";
import AnimatedText from "../molecules/AnimatedText";

export default function LandingIntro() {

    const [animation, setAnimation] = useState<string>('enterText')
    const [name, setName] = useState<{firstName: AnimatedLetterParams[], lastName: AnimatedLetterParams[]}>(
        {
        firstName: [
            {
                letter: 'R',
                delay: '200ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'    
            },
            {
                letter: 'A',
                delay: '300ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'N',
                delay: '400ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'J',
                delay: '600ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'O',
                delay: '700ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'T',
                delay: '800ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
        ],
        lastName: [
            {
                letter: 'D',
                delay: '900ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'H',
                delay: '1000ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'A',
                delay: '1100ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'R',
                delay: '1200ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'N',
                delay: '1300ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
            {
                letter: 'I',
                delay: '1400ms',
                animation: '',
                tailwind: 'text-color-pink font-roboto text-3xl md:text-5xl'
            },
        ]
    })

    useEffect(() => {
        function swapAnimation(): number {
            return setTimeout(() => {
                setAnimation(animation => 'bounceText')
            }, 2000)
        }

        const timeoutId: number = swapAnimation()

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div className="w-full h-1/2 p-4 flex flex-col justify-start items-center space-y-4 md:w-1/2 md:h-full md:justify-center">
            <p className="text-color-white font-jbm text-xl w-full text-left md:w-1/2 md:text-3xl">HELLO, MY NAME IS</p>
            <div className="w-full flex flex-row justify-start items-center space-x-4 md:w-1/2">
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={name.firstName} animationClass={animation} />
                </div>
                <div className="flex flex-row justify-start items-center">
                    <AnimatedText text={name.lastName} animationClass={animation} />
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