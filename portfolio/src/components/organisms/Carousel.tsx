import { CarouselCardParams } from '../../lib/types/types'
import CarouselTrack from '../molecules/CarouselTrack'
import { useState } from 'react'

const projectData: CarouselCardParams[] = [
    {
        title: 'Hegemony',
        subtitle: 'Virtual Economy Game',
        link: 'https://hegemony.vercel.app/',
        desc: 'An idle game that lets you interact with and contribute to a virtual economy in a fantasy setting. Invite other players and make friends to build your wealth together. Select an Empire, create Businesses, and even start your own States in this browser-based web app!'
    },
    {
        title: 'Not Hegemony',
        subtitle: 'Virtual Economy Game',
        link: 'https://hegemony.vercel.app/',
        desc: 'An idle game that lets you interact with and contribute to a virtual economy in a fantasy setting. Invite other players and make friends to build your wealth together. Select an Empire, create Businesses, and even start your own States in this browser-based web app!'
    }
]

export default function Carousel() {
    const [index, setIndex] = useState<number>(0)
    const [direction, setDirection] = useState<string>('left')

    function handleNext() {
        setDirection('right')
        setIndex(prevIndex => {
            return prevIndex + 1 === projectData.length ? 0 : prevIndex + 1
        })
    }

    function handlePrevious() {
        setDirection('left')
        setIndex(prevIndex => {
            return prevIndex - 1 < 0 ? projectData.length - 1 : prevIndex - 1
        })
    }

    return (
        <div className='w-full h-auto overflow-x-visible space-y-4 flex flex-col items-center'>
            <CarouselTrack index={index} direction={direction} current={projectData[index]} />
            <div className='w-full h-auto flex flex-row justify-center items-center space-x-4'>
                <img className='w-4 aspect-square' src='https://img.icons8.com/parakeet/100/chevron-left.png' onClick={handlePrevious} />
                {
                    projectData.map((p, idx) => {
                        return <div key={`CarouselDot${idx}${p.title}`} className={`h-2 aspect-square rounded-lg`} style={{backgroundColor: index === idx ? 'var(--color-pink)' : 'var(--color-light-grey)'}}></div>
                    })
                }
                <img className='w-4 aspect-square' src='https://img.icons8.com/parakeet/100/chevron-right.png' onClick={handleNext} />
            </div>
        </div>
    )
}