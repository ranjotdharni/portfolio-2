import { TechBoxParams } from '../../lib/types/types'
import TechBox from '../molecules/TechBox'


const techData: TechBoxParams[] = [
    {
        title: 'Client-side',
        animationDelay: 0.5,
        items: [
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                link: 'https://react.dev/',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://img.icons8.com/fluency/100/typescript--v1.png',
                link: 'https://www.typescriptlang.org/',
                title: 'TypeScript',
                textColor: '#ffffff',
                backgroundColor: '#3178c6',
                borderColor: '#ffffff'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/n/80/next-js.svg',
                link: 'https://nextjs.org/',
                title: 'NextJS',
                textColor: '#000000',
                backgroundColor: '#ffffff',
                borderColor: '#000000'
            }
        ]
    },
    {
        title: 'Server-side',
        animationDelay: 1,
        items: [
            {
                icon: 'https://img.icons8.com/fluency/100/node-js.png',
                link: 'https://nodejs.org/en',
                title: 'NodeJS',
                textColor: '#6cc24a',
                backgroundColor: '#215732',
                borderColor: '#6cc24a'
            },
            {
                icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png',
                link: 'https://www.djangoproject.com/',
                title: 'Django',
                textColor: '#092E20',
                backgroundColor: '#4c788d',
                borderColor: '#092E20'
            },
            {
                icon: 'https://img.icons8.com/external-those-icons-flat-those-icons/100/external-MySQL-programming-and-development-those-icons-flat-those-icons.png',
                link: 'https://www.mysql.com/',
                title: 'MySQL',
                textColor: '#00758f',
                backgroundColor: '#f29111',
                borderColor: '#00758f'
            }
        ]
    },
    {
        title: 'Tools',
        animationDelay: 1.5,
        items: [
            {
                icon: 'https://img.icons8.com/color/100/docker.png',
                link: 'https://www.docker.com/',
                title: 'Docker',
                textColor: '#ffffff',
                backgroundColor: '#1D63ED',
                borderColor: '#ffffff'
            },
            {
                icon: 'https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png',
                link: 'https://www.java.com/en/',
                title: 'Java',
                textColor: '#f89820',
                backgroundColor: '#5382a1',
                borderColor: '#f89820'
            },
            {
                icon: 'https://img.icons8.com/color/100/git.png',
                link: 'https://git-scm.com/',
                title: 'Git',
                textColor: '#F1502F',
                backgroundColor: '#3E2C00',
                borderColor: '#F1502F'
            }
        ]
    }
]

export default function TechBoxes() {

    return (
        <div className='w-full h-auto space-y-8 md:flex md:flex-row md:justify-center md:space-y-0 md:space-x-8'>
            {
                techData.map(tech => {
                    return <TechBox title={tech.title} animationDelay={tech.animationDelay} items={tech.items} />
                })
            }
        </div>
    )
}