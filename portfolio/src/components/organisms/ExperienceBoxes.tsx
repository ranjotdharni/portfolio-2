import { ExperienceBoxParams } from '../../lib/types/types'
import ExperienceBox from '../molecules/ExperienceBox'


const expData: ExperienceBoxParams[] = [
    {
        icon: 'https://img.icons8.com/arcade/100/graduation-cap.png',
        title: '3.82 ( / 4.00) GPA',
        text: "I graduated as one of the top of my class with higher honors (magna cum laude), demonstrating my dedication, strong work ethic, and commitment to academic excellence."
    }
]

export default function ExperienceBoxes() {

    return (
        <div className='w-full h-auto'>
            {
                expData.map(exp => {
                    return <ExperienceBox icon={exp.icon} title={exp.title} text={exp.text} />
                })
            }
        </div>
    )
}