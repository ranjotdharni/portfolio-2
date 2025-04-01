import { CarouselCardParams } from '../../lib/types/types'
import CarouselTrack from '../molecules/CarouselTrack'
import { useEffect, useState } from 'react'
import '../../styles/animation.css'

const projectData: CarouselCardParams[] = [
    {
        title: 'Hegemony',
        subtitle: 'Virtual Economy Game',
        link: 'https://hegemony.vercel.app/',
        siteImgIndex: 0, // See CarouselCard.tsx for reference
        desc: 'An idle game that lets you interact with and contribute to a virtual economy in a fantasy-like setting. Invite other players and make friends to build up your wealth. Select an Empire, create Cities, and even start your own States in this browser-based web app!'
    },
    {
        title: 'Voxyl',
        subtitle: 'Project Management Service',
        link: 'https://pitcrew.onrender.com/',
        siteImgIndex: 1,
        desc: 'Have a team? Have an idea? Now all you need is a platform to bring the two together. Voxyl is your one stop shop for organizing teams, creating projects, assigning roles, and monitoring performance. Sign up to create your first Team, recruit Members, and assign permissions.'
    },
    {
        title: 'Byte My Courses',
        subtitle: 'Schoolwork Assistant AI',
        link: 'https://github.com/timothydn2003/ByteMe',
        siteImgIndex: 2,
        desc: "Being in school can be tough, especially when pursuing higher education. You have so many responsibilities that sometimes it's hard to keep up. Luckily, this AI service that can take your notes, books, and other files and turn them into short, digestible reports."
    },
    {
        title: 'Sac 311 Mobile',
        subtitle: 'Customer Service Mobile App',
        link: 'https://github.com/ranjotdharni/sac-311-mobile',
        siteImgIndex: 3,
        desc: "City of Sacramento's 311 mobile service developed on React Native using the Expo framework. Make non-emergency customer service requests as a city resident, visitor, or business all at the click of a button from convenience of your mobile device."
    },
    {
        title: 'Tile Map Maker',
        subtitle: 'Image Generation Service',
        link: 'http://159.54.169.148:443/',
        siteImgIndex: 4,
        desc: "A powerful procedural generation application designed to create 1920x1080 images of a 2D tile map from a set of basic tile images. Whether you're a developer or a user interested in generating unique visual content, this application provides a seamless experience."
    },
    {
        title: 'Meteorize',
        subtitle: 'Real-time Weather Service',
        link: 'https://meteorize.netlify.app',
        siteImgIndex: 5,
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