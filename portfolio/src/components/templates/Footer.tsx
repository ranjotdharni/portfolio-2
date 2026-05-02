import { CreativeCommons } from 'lucide-react'


export default function Footer() {

    return (
        <footer className='w-full h-auto p-8 flex flex-row justify-center items-center z-10 text-muted-foreground text-sm'>
            Designed and Developed by Ranjot Dharni
            <CreativeCommons className='ml-1 text-sm' />
        </footer>
    )
}