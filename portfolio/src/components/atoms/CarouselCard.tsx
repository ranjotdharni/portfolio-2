import { CarouselCardParams } from '../../lib/types/types'


export default function CarouselCard(params: CarouselCardParams) {

    return (
        <div className='w-[80vw] h-auto p-4 space-y-2 flex flex-col justify-start items-start bg-color-bg-contrast border border-color-light-grey rounded'>
            <h4 className='text-3xl text-color-pink font-jbm'>{params.title}</h4>
            <h5 className='text-lg text-color-light-grey font-jbmi'>{params.subtitle}</h5>
            <iframe src={params.link} />
            <p className='text-xl text-color-light-grey font-roboto text-center'>{params.desc}</p>
        </div>
    )
}