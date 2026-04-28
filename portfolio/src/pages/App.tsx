import "../styles/index.css"
import Main from "../components/templates/Main"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { useEffect, useRef } from "react"
import { LOCAL_STORAGE_THEME_NAME } from "@/lib/constants/layout"
import NavBar from "@/components/templates/NavBar"
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
  const scrollData: { title: string, scrollRef: React.RefObject<HTMLElement | null> }[] = [
    {
      title: 'Intro',
      scrollRef: useRef<HTMLElement | null>(null)
    },
    {
      title: 'Bio',
      scrollRef: useRef<HTMLElement | null>(null)
    },
    {
      title: 'Tech',
      scrollRef: useRef<HTMLElement | null>(null)
    },
    {
      title: 'Projects',
      scrollRef: useRef<HTMLElement | null>(null)
    },
    {
      title: 'Contact',
      scrollRef: useRef<HTMLElement | null>(null)
    }
  ] 

  function scrollTo(index: number) {
    scrollData[index].scrollRef.current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
  }

  function contactMe() {
    scrollData[4].scrollRef.current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
  }

  function viewProjects() {
    scrollData[3].scrollRef.current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
  }

  useEffect(() => {
      function setInitialTheme() {
          const theme = localStorage.getItem(LOCAL_STORAGE_THEME_NAME)
          var html = document.documentElement
      
          if (theme) {
              html.classList.add("dark")
          }
      }

      setInitialTheme()
  }, [])

  return (
    <TooltipProvider>
      <SidebarProvider>
        <NavBar scrollRefs={scrollData.map(s => { return s.scrollRef })} contactMe={contactMe} viewProjects={viewProjects} />
        <SidebarInset>
          <Main scrollData={scrollData} scrollTo={scrollTo} contactMe={contactMe} />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
