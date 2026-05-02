import { TechBoxParams } from '../../lib/types/types'
import { motion } from 'motion/react'


export default function TechBox(params: TechBoxParams) {

    return (
        <motion.div className='w-full h-auto flex flex-col items-center space-y-4 p-4 border-2 border-color-bg-contrast shadow-xl rounded-xl bgBlur bg-color-bg-transparent'
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.25, delay: params.animationDelay }}
                variants={{
                    visible: { y: '0%', opacity: 1 },
                    hidden: { y: '10%', opacity: 0 }
                }}
            >
            <h3 className='text-color-pink text-4xl font-roboto'>{params.title}</h3>
            {
                params.items.map(() => {
                    return <></>
                }) 
            }
        </motion.div>
    )
}