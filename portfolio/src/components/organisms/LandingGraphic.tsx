import LandingGraphicImage from '../../assets/images/landingImage.png'
import '../../styles/animation.css'

export default function LandingGraphic() {
    
    return (
        <div className="w-full h-1/2 p-4 flex flex-col justify-center items-center overflow-visible md:w-1/2 md:h-full">
            <img src={LandingGraphicImage} className='h-full w-full object-cover slowBounce' />
        </div>
    )
}

// <iframe src='https://my.spline.design/roomrelaxingcopy-d771332ca2c1b974dd9708b657ea7f99/' className="w-full h-full"></iframe>