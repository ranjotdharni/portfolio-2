import { TechItemParams } from '../../lib/types/types'


export default function TechItem(params: TechItemParams) {

    return (
        <div className='w-full h-[15vh] flex flex-row justify-between items-center p-8 space-x-4 rounded-xl border-2' style={{color: params.textColor, backgroundColor: params.backgroundColor, borderColor: params.borderColor}}>
            <img src={params.icon} className='h-full aspect-square' />
            <p className='text-3xl font-jbm'>{params.title}</p>
        </div>
    )
}