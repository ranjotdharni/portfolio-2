import { CarouselTrackParams } from '../../lib/types/types'
import { motion, AnimatePresence } from 'motion/react'
import CarouselCard from '../atoms/CarouselCard'

const trackVariants = {
    hiddenRight: {
        x: "100%",
        y: 0,
        scale: 0.25,
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        y: 0,
        scale: 0.25,
        opacity: 0,
    },
    visible: {
        x: "0",
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: 0,
        scale: 0.25,
        transition: {
            duration: 0.15,
        },
    }
}

export default function CarouselTrack(params: CarouselTrackParams) {
    let css = 'w-auto h-auto flex flex-row justify-start items-center'

    return (
        <AnimatePresence>
            <motion.div 
                    key={`${params.current.title}${params.current.subtitle}`}
                    className={css}
                    initial={params.direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                    animate='visible'
                    exit='exit'
                    variants={trackVariants}
                >
                <CarouselCard title={params.current.title} subtitle={params.current.subtitle} link={params.current.link} siteImgIndex={params.current.siteImgIndex} desc={params.current.desc} />
            </motion.div>
        </AnimatePresence>
    )
}