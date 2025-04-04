import { ChangeEvent, MouseEvent } from 'react'


export interface BlobContainerParams {
    duration: number
    left: number
    width: number
    rotate: number
    delay: number
    tailwind: string
}

export interface AnimatedLetterParams {
    letter: string
    delay: string
    animation: string
    tailwind: string
}

export interface AnimatedTextParams {
    text: AnimatedLetterParams[]
    animationClass: string
}

export interface ExperienceBoxParams {
    icon: string
    title: string
    text: string
    animationDelay: number
}

export interface TechItemParams {
    icon: string
    link: string
    title: string
    textColor: string
    backgroundColor: string
    borderColor: string
}

export interface TechBoxParams {
    title: string
    animationDelay: number
    items: TechItemParams[]
}

export interface CarouselCardParams {
    title: string
    subtitle: string
    link: string
    siteImgIndex: number
    desc: string
}

export interface CarouselTrackParams {
    index: number
    direction: string
    current: CarouselCardParams
}

export interface ContactInputParams {
    text: string
    setText: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
    name: string
    textarea: boolean
    tailwind: string
}

export interface ContactFormInputParams {
    value: string,
    placeholder: string,
    name: string,
    textarea: boolean
    tailwind: string
}

export interface ContactFormParams {
    inputs: ContactFormInputParams[]
    message: string
    ref: React.RefObject<HTMLFormElement | null>
    changeText: (newValue: string, index: number) => void
    onSubmit: (event: MouseEvent<HTMLButtonElement>) => void
}