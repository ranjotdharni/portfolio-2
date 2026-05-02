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
    },
    {
        icon: 'https://img.icons8.com/fluency/100/typescript--v1.png',
        link: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
        desc: 'Industry-grade Type-safe JavaScript Superset',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://static.cdnlogo.com/logos/n/80/next-js.svg',
        link: 'https://nextjs.org/',
        title: 'NextJS',
        desc: 'Full Stack Web Development Framework',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/fluency/100/node-js.png',
        link: 'https://nodejs.org/en',
        title: 'NodeJS',
        desc: 'JavaScript Server-side Runtime/Language Tools',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png',
        link: 'https://www.djangoproject.com/',
        title: 'Django',
        desc: 'Server-side Python Development Framework',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/external-those-icons-flat-those-icons/100/external-MySQL-programming-and-development-those-icons-flat-those-icons.png',
        link: 'https://www.mysql.com/',
        title: 'MySQL',
        desc: 'High-Speed Robust Relational Database',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/color/100/docker.png',
        link: 'https://www.docker.com/',
        title: 'Docker',
        desc: 'Portable Lightweight Containerization Tool',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/color/96/figma--v1.png',
        link: 'https://help.figma.com/hc/en-us/categories/360002051613',
        title: 'Figma',
        desc: 'Highly Versatile Graphic Design Tool',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/color/100/git.png',
        link: 'https://git-scm.com/',
        title: 'Git',
        desc: 'Most Widely Used Version Control System',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/fluency/96/tailwind_css.png',
        link: 'https://tailwindcss.com/',
        title: 'Tailwind',
        desc: 'Efficient CSS Development Framework',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/nolan/96/oracle-logo.png',
        link: 'https://www.oracle.com/cloud/',
        title: 'Oracle Cloud',
        desc: 'Highly Scalable Cloud Engineering Platform',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/color/96/mongo-db.png',
        link: 'https://www.mongodb.com/',
        title: 'Mongo DB',
        desc: 'Document-Oriented NoSQL Database',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/fluency/96/vite.png',
        link: 'https://vite.dev/',
        title: 'Vite',
        desc: 'Well-supported Fast Front End Build Tool',
        projects: [
            projectData.masquerades
        ],
    },
    {
        icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png',
        link: 'https://www.postman.com/',
        title: 'Postman',
        desc: 'Leading API Development & Testing Platform',
        projects: [
            projectData.masquerades
        ],
    },
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
