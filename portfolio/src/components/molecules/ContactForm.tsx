import { ContactFormParams } from '../../lib/types/types'
import ContactInput from '../atoms/ContactInput'
import { ChangeEvent } from 'react'


export default function ContactForm(params: ContactFormParams) {

    function editText(index: number) {
        return (event: ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            params.changeText(event.target.value, index)
        }
    }

    return (

        <form className='w-full h-auto space-y-4 flex flex-col items-start md:w-auto md:space-y-8'>
            {
                params.inputs.map((input, index) => {
                    return <ContactInput key={`ContactInput${index}`} text={input.value} setText={editText(index)} placeholder={input.placeholder} tailwind={input.tailwind} />
                })
            }
            <button type='submit' onClick={params.onSubmit} className="bg-color-pink w-full rounded-3xl text-color-white font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Send</button>
        </form>
    )
}