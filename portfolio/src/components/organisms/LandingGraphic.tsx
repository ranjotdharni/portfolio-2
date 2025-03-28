import LandingGraphicImage from '../../assets/images/landingImage.png'

export default function LandingGraphic() {

    return (
        <div className="w-full h-1/2 p-4 flex flex-col justify-center items-center">
            <img className='w-full h-full object-cover' src={LandingGraphicImage} />
        </div>
    )
}