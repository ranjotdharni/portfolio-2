
import { ArrowUpRightIcon, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavExternals
({
  items,
}: {
  items: {
    title: string
    url: string
    Icon: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>External Links</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          return <SidebarMenuItem
            key={item.title}
          >
            <SidebarMenuButton tooltip={item.title}>
                {<item.Icon />}
                <span>{item.title}</span>
                <ArrowUpRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

