import TileMapGeneratorView from '../../assets/images/tileMapGeneratorView.png'
import ByteMyCourseView from '../../assets/images/byteMyCoursesView.png'
import Sac311MobileView from '../../assets/images/sac311MobileView.png'
import MeteorizeView from '../../assets/images/meteorizeView.png'
import HegemonyView from '../../assets/images/hegemonyView.png'
import { CarouselCardParams } from '../../lib/types/types'
import VoxylView from '../../assets/images/voxylView.png'

const siteImages: string[] = [
    HegemonyView,
    VoxylView,
    ByteMyCourseView,
    Sac311MobileView,
    TileMapGeneratorView,
    MeteorizeView
]

export default function CarouselCard(params: CarouselCardParams) {

    return (
        <a href={params.link} target='_blank'  className='w-[80vw] md:w-[35vw] h-[65vh] p-4 space-y-2 md:space-y-4 shadow-xl flex flex-col justify-start items-start bg-color-bg-contrast border border-color-light-grey rounded'>
            <div className='text-3xl text-color-pink font-jbm'>{params.title}</div>
            <h5 className='text-lg text-color-light-grey font-jbmi'>{params.subtitle}</h5>
            <img src={siteImages[params.siteImgIndex]} alt={params.title} />
            <p className='text-md md:text-lg text-color-dark-white font-jbm text-left'>{params.desc}</p>
        </a>
    )
}