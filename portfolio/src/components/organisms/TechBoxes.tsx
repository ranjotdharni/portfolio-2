import { TechBoxParams, TechItemParams } from '../../lib/types/types'
import TechItem from '../atoms/TechItem'
import TechBox from '../molecules/TechBox'

const projectData = {
    masquerades: {
        title: "Masquerades",
        link: "https://masquerades.netlify.app/",
        color: "var(--color-foreground)"
    },
    chemistreams: {
        title: "ChemiStreams",
        link: "https://chemistreams.vercel.app/",
        color: "#0b8e7c"
    },
    hegemony: {
        title: "Hegemony",
        link: "https://hegemony.vercel.app/",
        color: "#3b49c4"
    }
}

const techData: TechItemParams[] = [
    {
        icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
        link: 'https://react.dev/',
        title: 'React',
        desc: 'Modular JavaScript Front End Framework',
        projects: [
            projectData.masquerades,
            projectData.hegemony,
            projectData.chemistreams,
        ],

        textColor: '#88dded',
        backgroundColor: '#1c2c4c',
        borderColor: '#88dded'
    },
    {
        icon: 'https://img.icons8.com/fluency/100/typescript--v1.png',
        link: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        desc: 'Industry-grade Type-safe JavaScript Superset',
        projects: [
            projectData.masquerades
        ],

        textColor: '#ffffff',
        backgroundColor: '#3178c6',
        borderColor: '#ffffff'
    },
    {
        icon: 'https://static.cdnlogo.com/logos/n/80/next-js.svg',
        link: 'https://nextjs.org/',
        title: 'NextJS',
        desc: 'Full Stack Web Development Framework',
        projects: [
            projectData.masquerades
        ],

        textColor: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#000000'
    },
    {
        icon: 'https://img.icons8.com/fluency/100/node-js.png',
        link: 'https://nodejs.org/en',
        title: 'NodeJS',
        desc: 'JavaScript Server-side Runtime/Language Tools',
        projects: [
            projectData.masquerades
        ],

        textColor: '#6cc24a',
        backgroundColor: '#215732',
        borderColor: '#6cc24a'
    },
    {
        icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png',
        link: 'https://www.djangoproject.com/',
        title: 'Django',
        desc: 'Server-side Python Development Framework',
        projects: [
            projectData.masquerades
        ],

        textColor: '#092E20',
        backgroundColor: '#4c788d',
        borderColor: '#092E20'
    },
    {
        icon: 'https://img.icons8.com/external-those-icons-flat-those-icons/100/external-MySQL-programming-and-development-those-icons-flat-those-icons.png',
        link: 'https://www.mysql.com/',
        title: 'MySQL',
        desc: 'High-Speed Robust Relational Database',
        projects: [
            projectData.masquerades
        ],

        textColor: '#00758f',
        backgroundColor: '#f29111',
        borderColor: '#00758f'
    },
    {
        icon: 'https://img.icons8.com/color/100/docker.png',
        link: 'https://www.docker.com/',
        title: 'Docker',
        desc: 'Portable Lightweight Containerization Tool',
        projects: [
            projectData.masquerades
        ],

        textColor: '#ffffff',
        backgroundColor: '#1D63ED',
        borderColor: '#ffffff'
    },
    {
        icon: 'https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png',
        link: 'https://www.java.com/en/',
        title: 'Java',
        desc: 'Object-Oriented Programming Language',
        projects: [
            projectData.masquerades
        ],

        textColor: '#f89820',
        backgroundColor: '#5382a1',
        borderColor: '#f89820'
    },
    {
        icon: 'https://img.icons8.com/color/100/git.png',
        link: 'https://git-scm.com/',
        title: 'Git',
        desc: 'Most Widely Used Version Control System',
        projects: [
            projectData.masquerades
        ],

        textColor: '#F1502F',
        backgroundColor: '#3E2C00',
        borderColor: '#F1502F'
    }
]

export default function TechBoxes() {

    return (
        <div className='w-full h-auto grid grid-cols-5 gap-4'>
            {
                techData.map(tech => {
                    return <TechItem {...tech} />
                })
            }
        </div>
    )
}