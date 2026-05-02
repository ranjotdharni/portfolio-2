import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { SubmitEvent } from "react"
import { Spinner } from "../ui/spinner"

export default function ContactForm({ ref, isLoading, onSubmit, onCancel, errors, successMessage } : { ref: React.RefObject<HTMLFormElement | null>, isLoading: boolean, onSubmit: (event: SubmitEvent<HTMLFormElement>) => void, onCancel: () => void, errors: { message: string }[], successMessage: string }) {
  return (
    <form ref={ref} onSubmit={onSubmit} className="w-full mx-auto md:mx-0 max-w-sm">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first">First Name</FieldLabel>
            <Input id="first" name="first" type="text" placeholder="Linus" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="last">Last Name</FieldLabel>
            <Input id="last" name="last" type="text" placeholder="Torvalds" required />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="linus@example.com" required />
          <FieldDescription>
            We'll never share your email with anyone.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
          <FieldDescription>
            Optional
          </FieldDescription>
        </Field>
        <FieldSet>
            <FieldGroup>
                <Field>
                <FieldLabel htmlFor="message">
                    Message
                </FieldLabel>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here."
                    className="min-h-30"
                    required
                />
                </Field>
            </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {
              isLoading ? 
              <Spinner /> :
              "Submit"
            }
          </Button>
        </Field>
        {
          errors.length !== 0 && <FieldError errors={errors} className={successMessage === errors[0].message ? "text-green-700" : undefined} />
        }
      </FieldGroup>
    </form>
  )
}
