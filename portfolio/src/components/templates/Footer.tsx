import { MdOutlineDesignServices } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'


export default function Footer() {

    return (
        <footer className='w-full h-auto p-8 flex flex-row justify-center items-center space-x-20 z-10'>
            <a href='https://github.com/ranjotdharni' target='_blank' className='w-auto h-auto'>
                <FaGithub className='text-color-light-grey-text text-3xl' />
            </a>
            <a href='https://www.linkedin.com/in/ranjot-dharni-717580269/' target='_blank' className='w-auto h-auto'>
                <FaLinkedin className='text-color-light-grey-text text-3xl' />
            </a>
            <a href='https://www.figma.com/design/0qc26uKu4wU1cy3QFeOpU7/311-App-Mock-up--Robby-?node-id=0-1&t=w9KLbdS6kwWp6LL6-1' target='_blank' className='w-auto h-auto'>
                <MdOutlineDesignServices className='text-color-light-grey-text text-3xl' />
            </a>
        </footer>
    )
}