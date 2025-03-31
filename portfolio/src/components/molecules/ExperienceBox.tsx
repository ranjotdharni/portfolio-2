import { ExperienceBoxParams } from '../../lib/types/types'
import { motion } from 'motion/react'

export default function ExperienceBox(params: ExperienceBoxParams) {

    return (
        <motion.div 
                className='w-full h-auto space-y-4 p-4 flex flex-col justify-start items-center relative border-2 border-color-bg-contrast shadow-xl rounded-xl md:w-1/4 md:h-[50vh] md:justify-center'
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.25, delay: params.animationDelay }}
                variants={{
                    visible: { x: '0%', opacity: 1 },
                    hidden: { x: '10%', opacity: 0 }
                }}
            >
            <img className='w-1/4 aspect-square' src={params.icon} />
            <h3 className='w-auto h-auto text-2xl font-roboto text-color-pink'>{params.title}</h3>
            <p className='w-auto h-auto text-sm font-jbm text-color-light-grey text-center md:text-2xl md:text-center'>{params.text}</p>
        </motion.div>
    )
}