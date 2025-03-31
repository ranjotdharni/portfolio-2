import { TechBoxParams, TechItemParams } from '../../lib/types/types'
import TechBox from '../molecules/TechBox'


const techData: TechBoxParams[] = [
    {
        title: 'Client-side',
        animationDelay: 0.5,
        items: [
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            }
        ]
    },
    {
        title: 'Client-side',
        animationDelay: 1,
        items: [
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            }
        ]
    },
    {
        title: 'Client-side',
        animationDelay: 1.5,
        items: [
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
            },
            {
                icon: 'https://static.cdnlogo.com/logos/r/63/react.svg',
                title: 'React',
                textColor: '#88dded',
                backgroundColor: '#1c2c4c',
                borderColor: '#88dded'
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