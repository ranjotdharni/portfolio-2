

export interface BlobContainerParams {
    tailwind: string
}

export interface AnimatedLetterParams {
    animation: string
    letter: string
    delay: string
    iterations: string
    tailwind: string
}

export interface AnimatedTextParams {
    text: AnimatedLetterParams[]
}