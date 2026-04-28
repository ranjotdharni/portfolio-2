
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSections
({
  items,
  scrollTo,
}: {
  items: {
    title: string
    Icon: LucideIcon
    scrollIndex: number
  }[],
  scrollTo: (index: number) => void
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigate</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          return <SidebarMenuItem
            key={item.title}
            onClick={() => { scrollTo(item.scrollIndex) }}
          >
            <SidebarMenuButton tooltip={item.title}>
                {<item.Icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
