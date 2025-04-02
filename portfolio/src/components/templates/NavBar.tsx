import { navHeight } from '../../lib/constants/layout'
import { useEffect, useState } from 'react'
import '../../styles/animation.css'


export default function NavBar(params: { currentIndex: number, changeIndex: (index: number) => void, navData: { title: string, scrollRef: React.RefObject<HTMLElement | null>}[] }) {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    let css = `w-full fixed top-0 z-20 p-0 flex flex-col items-center justify-start ${scrollPercentage !== 0 ? 'bg-color-bg' : ''} border-opacity-100 border-color-bg-contrast ${scrollPercentage !== 0 ? 'border-b-2' : 'border-b-0'}`

    function scrollTo(index: number) {
        params.navData[index].scrollRef.current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
    }

    function handleScroll() {
        const scrollTop = window.scrollY
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = (scrollTop / documentHeight) * 100
        setScrollPercentage(scrollPercentage)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={css} style={{height: navHeight}}>
            <div className='h-[5px] bg-color-purple scrollWatcher' style={{width: `${scrollPercentage}%`}}></div>

            <div className='w-full h-4/5 flex flex-row justify-end md:justify-between items-center'>
                <p className="h-full aspect-square text-white font-jbm text-5xl flex flex-col items-center justify-center px-10">RD</p>

                <div className="hidden w-4/5 h-full p-4 flex-row justify-evenly items-center font-jbm text-xs md:flex md:text-lg">
                    {
                        params.navData.map((data, index) => {
                            return <p className='cursor-pointer' style={{color: params.currentIndex === index ? 'var(--color-pink)' : 'var(--color-white)'}} onClick={() => { scrollTo(index); params.changeIndex(index); }}>{data.title}</p>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}