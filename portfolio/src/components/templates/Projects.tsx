import ProjectCarousel from '../organisms/ProjectCarousel'

import ChemistreamsView from '../../assets/images/chemistreamsView.png'
import MasqueradesView from '../../assets/images/masqueradesView.png'
import MeteorizeView from '../../assets/images/meteorizeView.png'
import HegemonyView from '../../assets/images/hegemonyView.png'
import VoxylView from '../../assets/images/voxylView.png'

import { CarouselCardParams } from '../../lib/types/types'

const projectData: CarouselCardParams[] = [
    {
        title: 'Masquerades',
        subtitle: 'Anonymous Survey Platform',
        link: 'https://masquerades.netlify.app/',
        src: MasqueradesView, // See CarouselCard.tsx for reference
        desc: 'Masquerades is a web-based survey platform. Create surveys, let participants give their feedback, and visually analyze the results using our easy-to-use Statistics Dashboard. Give your customers peace of mind by ensuring their online privacy is preserved.',
        codeLink: 'https://github.com/ranjotdharni/masquerade',
        usageLink: 'https://masquerades.netlify.app/usage',
        reportLink: 'https://github.com/ranjotdharni/masquerade/issues',
        badge: {
            title: "Most Recent"
        },
    },
    {
        title: 'ChemiStreams',
        subtitle: 'Real-time Chat Application',
        link: 'https://chemistreams.vercel.app/',
        src: ChemistreamsView, // See CarouselCard.tsx for reference
        desc: 'A browser-to-browser messaging service for chatting with your friends in real time. Message your friends, create group chats, and customize your profile to stand out. Share your favorite music and videos with your friends using our Spotify and YouTube embedding features.',
        codeLink: 'https://github.com/ranjotdharni/chemistreams-2.0',
        usageLink: 'https://github.com/ranjotdharni/chemistreams-2.0#usage',
        reportLink: 'https://github.com/ranjotdharni/chemistreams-2.0/issues',
        badge: {
            title: "Featured"
        },
    },
    {
        title: 'Hegemony',
        subtitle: 'Virtual Economy Game',
        link: 'https://hegemony.vercel.app/',
        src: HegemonyView,
        desc: 'An idle game that lets you interact with and contribute to a virtual economy in a fantasy-like setting. Invite other players and make friends to build up your wealth. Select an Empire, create Cities, and even start your own States in this browser-based web app!',
        codeLink: 'https://github.com/ranjotdharni/ecos',
        usageLink: 'https://github.com/ranjotdharni/ecos#usage',
        reportLink: 'https://github.com/ranjotdharni/ecos/issues',
        badge: {
            title: "Featured"
        },
    },
    {
        title: 'Voxyl',
        subtitle: 'Project Management Service',
        link: 'https://pitcrew.onrender.com/',
        src: VoxylView,
        desc: 'Have a team? Have an idea? Now all you need is a platform to bring the two together. Voxyl is your one stop shop for organizing teams, creating projects, assigning roles, and monitoring performance. Sign up to create your first Team, recruit Members, and assign permissions.',
        codeLink: 'https://github.com/ranjotdharni/voxyl-app',
        usageLink: 'https://github.com/ranjotdharni/voxyl-app#usage',
        reportLink: 'https://github.com/ranjotdharni/voxyl-app/issues',
        badge: {
            title: "In Progress"
        },
    },
    {
        title: 'Meteorize',
        subtitle: 'Real-time Weather Service',
        link: 'https://meteorize.netlify.app',
        src: MeteorizeView,
        desc: "A simple tool for viewing the current, daily, and weekly forecasts around the world. Search for a location and add them to your weather queue to quickly find their forecast again and again at the click of a button, and all with an easy-to-use user interface.",
        codeLink: 'https://github.com/ranjotdharni/react-next-app',
        usageLink: 'https://meteorize.netlify.app/',
        reportLink: 'https://github.com/ranjotdharni/react-next-app/issues',
        badge: {
            title: "Under Revision"
        },
    },
]

export default function Projects(params: { scrollRef: React.RefObject<HTMLElement | null> }) {

    return (
        <section ref={params.scrollRef} className='w-full h-auto pt-16 z-10 space-y-8 bg-opacity-0 flex flex-col items-center'>
            <h2 className='w-auto h-auto text-3xl font-roboto md:text-5xl'>Projects</h2>
            <p className='text-primary text-xl font-jbm'>Explore some of the projects I've created and contributed to. Use the arrows or swipe on screen to navigate.</p>
            <ProjectCarousel params={projectData} />
            <p className="rounded-3xl w-full flex flex-row justify-center text-color-light-grey-text font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Click or tap anywhere on a project to pause auto-scroll.</p>
        </section>
    )
}
