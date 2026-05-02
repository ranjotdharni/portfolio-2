import { useRef, SubmitEvent, useState } from "react"
import ContactForm from "../molecules/ContactForm"
import ContactGraphic from "../molecules/ContactGraphic"
import emailjs from "@emailjs/browser"

const SUCCESS_MESSAGE: string = "Message Sent"

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null)
    const [errors, setErrors] = useState<{ message: string }[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function updateErrorMessage(message: string) {
        setErrors([
            {
                message: message
            }
        ])
    }

    async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setErrors([])

        setIsLoading(true)

        await emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current!, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then(() => {
            clearForm()
            updateErrorMessage(SUCCESS_MESSAGE)
        }, (error) => {
            console.log(error)
            updateErrorMessage('500 Internal Server Error')
        })

        setIsLoading(false)
    }

    function clearForm() {
        setErrors([])
        formRef.current?.reset()
    }

    return (
        <div className='w-full h-auto flex flex-col space-y-4 mx-auto md:pt-16 md:flex-row md:space-y-0 md:items-center md:justify-center md:space-x-24'>
            <ContactForm ref={formRef} isLoading={isLoading} onCancel={clearForm} onSubmit={onSubmit} errors={errors} successMessage={SUCCESS_MESSAGE} />
            <ContactGraphic />
        </div>
    )
}
