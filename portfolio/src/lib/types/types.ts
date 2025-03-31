

export interface BlobContainerParams {
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