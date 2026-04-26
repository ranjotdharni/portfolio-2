import '../../styles/animation.css'
import { SidebarTrigger } from '../ui/sidebar'
import { ButtonGroup } from '../ui/button-group'
import { Button } from '../ui/button'
import { SunMoonIcon } from 'lucide-react'
import { toggleTheme } from '@/lib/utils/client'


export default function NavBar() {

    return (
        <header className="sticky top-0 z-20 bg-background flex h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <ButtonGroup>
            <ButtonGroup className="flex">
              <Button variant="outline" size="icon" aria-label="Toggle Theme" onClick={toggleTheme} >
                <SunMoonIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">GitHub</Button>
              <Button variant="outline">LinkedIn</Button>
              <Button variant="outline">Figma</Button>
            </ButtonGroup>
          </ButtonGroup>
      </header>
    )
}