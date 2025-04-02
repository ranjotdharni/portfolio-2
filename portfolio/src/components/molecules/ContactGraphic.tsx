import ContactGraphicImage from '../../assets/images/contactArt.png'
import '../../styles/animation.css'


export default function ContactGraphic() {

    return (
        <div className='w-3/4 mx-auto aspect-square flex flex-col justify-center mt-4 md:mt-0 md:w-1/3 md:mx-0'>
            <img src={ContactGraphicImage} className='w-full h-full relative rotate3d' />
        </div>
    )
}