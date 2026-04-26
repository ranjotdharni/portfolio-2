import "../styles/index.css"
import Main from "../components/templates/Main"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { useEffect } from "react"
import { LOCAL_STORAGE_THEME_NAME } from "@/lib/constants/layout"
import NavBar from "@/components/templates/NavBar"
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
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
        <NavBar />
        <SidebarInset>
          <Main />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
