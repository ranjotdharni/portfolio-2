import { CarouselCardParams } from '../../lib/types/types'
import CarouselTrack from '../molecules/CarouselTrack'
import { useEffect, useState } from 'react'
import '../../styles/animation.css'

const projectData: CarouselCardParams[] = [
    {
        title: 'Masquerades',
        subtitle: 'Anonymous Survey Platform',
        link: 'https://masquerades.netlify.app/',
        siteImgIndex: 0, // See CarouselCard.tsx for reference
        desc: 'Masquerades is a web-based survey platform. Create surveys, let participants give their feedback, and visually analyze the results using our easy-to-use Statistics Dashboard. Give your customers peace of mind by ensuring their online privacy is preserved.'
    },
    {
        title: 'ChemiStreams',
        subtitle: 'Real-time Chat Application',
        link: 'https://chemistreams.vercel.app/',
        siteImgIndex: 1, // See CarouselCard.tsx for reference
        desc: 'A browser-to-browser messaging service for chatting with your friends in real time. Message your friends, create group chats, and customize your profile to stand out. Share your favorite music and videos with your friends using our Spotify and YouTube embedding features.'
    },
    {
        title: 'Hegemony',
        subtitle: 'Virtual Economy Game',
        link: 'https://hegemony.vercel.app/',
        siteImgIndex: 2,
        desc: 'An idle game that lets you interact with and contribute to a virtual economy in a fantasy-like setting. Invite other players and make friends to build up your wealth. Select an Empire, create Cities, and even start your own States in this browser-based web app!'
    },
    {
        title: 'Voxyl',
        subtitle: 'Project Management Service',
        link: 'https://pitcrew.onrender.com/',
        siteImgIndex: 3,
        desc: 'Have a team? Have an idea? Now all you need is a platform to bring the two together. Voxyl is your one stop shop for organizing teams, creating projects, assigning roles, and monitoring performance. Sign up to create your first Team, recruit Members, and assign permissions.'
    },
    {
        title: 'Meteorize',
        subtitle: 'Real-time Weather Service',
        link: 'https://meteorize.netlify.app',
        siteImgIndex: 4,
        desc: "A simple tool for viewing the current, daily, and weekly forecasts around the world. Search for a location and add them to your weather queue to quickly find their forecast again and again at the click of a button, and all with an easy-to-use user interface."
    }
]

export default function Carousel() {
    const [index, setIndex] = useState<number>(0)
    const [direction, setDirection] = useState<string>('left')
    const [moved, setMoved] = useState<boolean>(false)

    function handleNext() {
        if (!moved)
            setMoved(true)

        setDirection('right')
        setIndex(prevIndex => {
            return prevIndex + 1 === projectData.length ? 0 : prevIndex + 1
        })
    }

    function handlePrevious() {
        if (!moved)
            setMoved(true)

        setDirection('left')
        setIndex(prevIndex => {
            return prevIndex - 1 < 0 ? projectData.length - 1 : prevIndex - 1
        })
    }

    useEffect(() => {
        let intervalId: number

        function startInterval() {
            return setInterval(() => {
                setDirection('right')
                setIndex(prevIndex => {
                    return prevIndex + 1 === projectData.length ? 0 : prevIndex + 1
                })
            }, 3000)
        }

        function stopInterval() {
            if (intervalId)
                clearInterval(intervalId)
        }

        if (!moved) {
            intervalId = startInterval()
        }

        if (moved) {
            stopInterval()
        }

        return stopInterval
    }, [moved])

    return (
        <div className='space-y-4'>
            <div className='w-full h-auto overflow-x-visible flex flex-row justify-center items-center'>
                <CarouselTrack index={index} direction={direction} current={projectData[index]} />
            </div>
            <div className='w-full h-auto flex flex-row justify-center items-center space-x-4 overflow-visible'>
                <img className='w-4 aspect-square arrowRise' src='https://img.icons8.com/parakeet/100/chevron-left.png' onClick={handlePrevious} />
                {
                    projectData.map((p, idx) => {
                        return <div onClick={() => { setIndex(idx); if (!moved) { setMoved(true) } }} key={`CarouselDot${idx}${p.title}`} className={`relative h-2 aspect-square rounded-lg hover:cursor-pointer dotRise`} style={{backgroundColor: index === idx ? 'var(--color-pink)' : 'var(--color-light-grey)', top: index === idx ? -5 : 0}}></div>
                    })
                }
                <img className='w-4 aspect-square arrowRise' src='https://img.icons8.com/parakeet/100/chevron-right.png' onClick={handleNext} />
            </div>
        </div>
    )
}