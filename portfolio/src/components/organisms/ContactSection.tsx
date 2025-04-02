import { ContactFormInputParams } from '../../lib/types/types'
import ContactGraphic from '../molecules/ContactGraphic'
import ContactForm from '../molecules/ContactForm'
import { useState, MouseEvent } from 'react'


export default function ContactSection() {
    const [inputs, setInputs] = useState<ContactFormInputParams[]>([
        {
            value: '',
            placeholder: 'Name',
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Email',
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Phone',
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Message',
            tailwind: 'h-[15vh] flex flex-col justify-start items-start'
        },
    ])

    function changeText(newText: string, index: number) {
        const modifiedArr: ContactFormInputParams[] = [...inputs]
        modifiedArr[index] = {...modifiedArr[index], value: newText}
        setInputs(modifiedArr)
    }

    function onSubmit(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        // do something
    }

    return (
        <div className='w-full h-auto flex flex-col space-y-4 mx-auto md:pt-16 md:flex-row md:space-y-0 md:items-center md:justify-center md:space-x-24'>
            <ContactForm inputs={inputs} changeText={changeText} onSubmit={onSubmit} />
            <ContactGraphic />
        </div>
    )
}