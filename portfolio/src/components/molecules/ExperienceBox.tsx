import { ExperienceBoxParams } from '../../lib/types/types'
import '../../styles/animation.css'

export default function ExperienceBox(params: ExperienceBoxParams) {

    return (
        <div className='w-full h-auto space-y-4 flex flex-col justify-start items-center relative enterExp'>
            <img className='w-1/3 aspect-square' src={params.icon} />
            <h3 className='w-auto h-auto text-2xl font-roboto text-color-white'>{params.title}</h3>
            <p className='w-auto h-auto text-sm font-jbm text-color-light-grey text-center'>{params.text}</p>
        </div>
    )
}