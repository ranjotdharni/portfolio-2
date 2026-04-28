/*import { ContactFormParams } from '../../lib/types/types'
import ContactInput from '../atoms/ContactInput'
import { ChangeEvent } from 'react'


export default function ContactForm(params: ContactFormParams) {
    function editText(index: number) {
        return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            event.preventDefault()
            params.changeText(event.target.value, index)
        }
    }

    return (

        <form ref={params.ref} className='w-full h-auto space-y-4 flex flex-col items-start md:w-auto md:space-y-8'>
            {
                params.inputs.map((input, index) => {
                    return <ContactInput key={`ContactInput${index}`} text={input.value} setText={editText(index)} name={input.name} textarea={input.textarea} placeholder={input.placeholder} tailwind={input.tailwind} />
                })
            }
            <div className='w-full h-auto flex flex-col md:flex-row justify-end items-center space-y-4 md:space-x-4'>
                <button type='submit' onClick={params.onSubmit} className="bg-color-pink w-full rounded-3xl text-color-white font-jbm px-4 py-2 md:w-auto md:px-12 md:py-2 md:h-auto md:text-md">Send</button>
                <p className='text-color-white font-jbm'>{params.message}</p>
            </div>
        </form>
    )
}*/

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

export default function ContactForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-first-name">First Name</FieldLabel>
            <Input id="form-first-name" type="text" placeholder="Linus" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-last-name">Last Name</FieldLabel>
            <Input id="form-last-name" type="text" placeholder="Torvalds" required />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="linus@example.com" required />
          <FieldDescription>
            We'll never share your email with anyone.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="form-phone">Phone Number</FieldLabel>
          <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          <FieldDescription>
            Optional
          </FieldDescription>
        </Field>
        <FieldSet>
            <FieldGroup>
                <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Message
                </FieldLabel>
                <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Type your message here."
                    className="min-h-30"
                />
                </Field>
            </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
