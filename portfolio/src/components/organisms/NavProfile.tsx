import {
  ArrowUpRightIcon,
  ChevronsUpDown,
  PencilRulerIcon,
  SunMoonIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import PFP from "@/assets/images/pfp.png"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { Button } from "../ui/button"
import { toggleTheme } from "@/lib/utils/client"

export function NavProfile({ contactMe } : { contactMe: () => void }) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={PFP} alt="Ranjot Dharni" />
                <AvatarFallback className="rounded-lg">RD</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Ranjot Dharni</span>
                <span className="truncate text-xs">B.S. Computer Science</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={PFP} alt="Ranjot Dharni" />
                  <AvatarFallback className="rounded-lg">RD</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Ranjot Dharni</span>
                  <span className="truncate text-xs">B.S. Computer Science</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={toggleTheme}>
                <SunMoonIcon />
                Toggle Theme
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex flex-row justify-between">
                <a className="flex flex-row" href='https://github.com/ranjotdharni' target="_blank">
                    <FaGithub className="mr-2" />
                    GitHub
                </a>
                <ArrowUpRightIcon />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row justify-between">
                <a className="flex flex-row" href='https://www.linkedin.com/in/ranjot-dharni-717580269/' target="_blank">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                </a>
                <ArrowUpRightIcon />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row justify-between">
                <a className="flex flex-row" href='https://www.figma.com/design/0qc26uKu4wU1cy3QFeOpU7/311-App-Mock-up--Robby-?node-id=0-1&t=1nJ6OEvN7JDVVc3m-1' target="_blank">
                    <PencilRulerIcon className="mr-2" />
                    Figma
                </a>
                <ArrowUpRightIcon />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <div className="w-full px-2 py-1">
              <Button className="w-full" onClick={contactMe}>Contact Me</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
