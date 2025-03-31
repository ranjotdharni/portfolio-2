import LandingGraphicImage from '../../assets/images/landingImage.png'
import '../../styles/animation.css'

export default function LandingGraphic() {
    
    return (
        <div className="w-full h-1/2 p-4 relative -top-[10vh] flex flex-col justify-center items-center overflow-visible md:w-1/2 md:h-full md:top-0">
            <img src={LandingGraphicImage} className='h-full w-full object-cover slowBounce' />
        </div>
    )
}