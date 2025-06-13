import { ContactFormInputParams } from '../../lib/types/types'
import ContactGraphic from '../molecules/ContactGraphic'
import { useState, MouseEvent, useRef } from 'react'
import ContactForm from '../molecules/ContactForm'
import useNotify from '../../lib/hooks/useNotify'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
    const [inputs, setInputs] = useState<ContactFormInputParams[]>([
        {
            value: '',
            placeholder: 'Name',
            name: 'name',
            textarea: false,
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Email',
            name: 'email',
            textarea: false,
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Phone',
            name: 'phone',
            textarea: false,
            tailwind: 'h-[5vh]'
        },
        {
            value: '',
            placeholder: 'Message',
            name: 'message',
            textarea: true,
            tailwind: 'h-[15vh] flex flex-col justify-start items-start'
        },
    ])

    const [message, setMessage] = useNotify()
    const formRef = useRef<HTMLFormElement>(null)

    function changeText(newText: string, index: number) {
        const modifiedArr: ContactFormInputParams[] = [...inputs]
        modifiedArr[index] = {...modifiedArr[index], value: newText}
        setInputs(modifiedArr)
    }

    function validateFields(): boolean {
        if (!formRef.current)
            return false

        const elements: HTMLFormControlsCollection = formRef.current.elements

        // this must be done this way because 'elements' final element is an html submit button
        const name: HTMLInputElement = elements[0] as HTMLInputElement
        const email: HTMLInputElement = elements[1] as HTMLInputElement
        const number: HTMLInputElement = elements[2] as HTMLInputElement
        const message: HTMLTextAreaElement = elements[3] as HTMLTextAreaElement

        if (name.value.length < 1 || name.value.length > 128)
            return false

        if (email.value.length < 1 || email.value.length > 128)
            return false

        if (number.value.length < 1 || number.value.length > 128)
            return false

        if (message.value.length < 1 || message.value.length > 128)
            return false

        return true
    }

    function onSubmit(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        if (!validateFields()) {
            setMessage('1 through 128 characters allowed')
            return
        }

        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current!, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then(() => {
            setMessage('Message Sent')
        }, (error) => {
            console.log(error)
            setMessage('500 Internal Server Error')
        })
    }

    return (
        <div className='w-full h-auto flex flex-col space-y-4 mx-auto md:pt-16 md:flex-row md:space-y-0 md:items-center md:justify-center md:space-x-24'>
            <ContactForm inputs={inputs} message={message} ref={formRef} changeText={changeText} onSubmit={onSubmit} />
            <ContactGraphic />
        </div>
    )
}