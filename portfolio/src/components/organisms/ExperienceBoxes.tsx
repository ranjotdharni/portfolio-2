import { ExperienceBoxParams } from '../../lib/types/types'
import ExperienceBox from '../molecules/ExperienceBox'


const expData: ExperienceBoxParams[] = [
    {
        icon: 'https://img.icons8.com/arcade/100/book-stack.png',
        title: '3.82 ( / 4.00) GPA',
        text: "I graduated as one of the top of my class with higher honors (magna cum laude), demonstrating my dedication and commitment to academic excellence.",
        animationDelay: 0.5
    },
    {
        icon: 'https://img.icons8.com/arcade/100/graduation-cap.png',
        title: 'B.S. Computer Science',
        text: "I have my Bachelor of Science in Computer Science obtained from California State University, Sacramento in May of 2024.",
        animationDelay: 1
    },
    {
        icon: 'https://img.icons8.com/arcade/100/marker.png',
        title: 'Sacramento, CA',
        text: "I'm located in the Greater Sacramento area and hope to find a position nearby, however I'm open to relocation related to work.",
        animationDelay: 1.5
    }
]

export default function ExperienceBoxes() {

    return (
        <div className='w-full h-auto space-y-8 md:flex md:flex-row md:justify-center md:space-y-0 md:space-x-8'>
            {
                expData.map(exp => {
                    return <ExperienceBox icon={exp.icon} title={exp.title} text={exp.text} animationDelay={exp.animationDelay} />
                })
            }
        </div>
    )
}