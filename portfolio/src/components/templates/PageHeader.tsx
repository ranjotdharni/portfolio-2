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
              <Button variant="outline" asChild>
                <a href='https://github.com/ranjotdharni'>GitHub</a>
              </Button>
              <Button variant="outline" asChild>
                <a href='https://www.linkedin.com/in/ranjot-dharni-717580269/'>LinkedIn</a>
              </Button>
              <Button variant="outline" asChild>
                <a href='https://www.figma.com/design/0qc26uKu4wU1cy3QFeOpU7/311-App-Mock-up--Robby-?node-id=0-1&t=1nJ6OEvN7JDVVc3m-1'>Figma</a>
              </Button>
            </ButtonGroup>
          </ButtonGroup>
      </header>
    )
}
