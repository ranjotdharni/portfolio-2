import { CarouselTrackParams } from '../../lib/types/types'
import CarouselCard from '../atoms/CarouselCard'
import { motion, AnimatePresence } from 'motion/react'

const trackVariants = {
    hiddenRight: {
        x: "100%",
        y: 0,
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        y: 0,
        opacity: 0,
    },
    visible: {
        x: "0",
        y: 0,
        opacity: 1,
        transition: {
        duration: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 0,
        scale: 0.8,
        transition: {
        duration: 0.1,
        },
    }
}

export default function CarouselTrack(params: CarouselTrackParams) {

    return (
        <AnimatePresence>
            <motion.div 
                    key={`${params.current.title}${params.current.subtitle}`}
                    className='w-auto h-auto flex flex-row justify-start items-center space-x-4'
                    initial={params.direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                    animate='visible'
                    exit='exit'
                    variants={trackVariants}
                >
                <CarouselCard title={params.current.title} subtitle={params.current.subtitle} link={params.current.link} desc={params.current.desc} />
            </motion.div>
        </AnimatePresence>
    )
}