import { BugIcon, CodeIcon, CpuIcon, DoorOpenIcon, FlaskConicalIcon, HandCoinsIcon, HandshakeIcon, IdCardIcon, Layers3Icon, PenToolIcon, VenetianMaskIcon } from "lucide-react";
import { NavHeader } from "../organisms/NavHeader";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { NavSections } from "../organisms/NavSections";
import { Separator } from "../ui/separator";
import { NavExternals } from "../organisms/NavExternals";
import { NavProfile } from "../organisms/NavProfile";

const projectData = [
    {
        name: "Masquerades",
        url: "https://masquerades.netlify.app/",
        logo: VenetianMaskIcon
    },
    {
        name: "ChemiStreams",
        url: "https://chemistreams.vercel.app/",
        logo: FlaskConicalIcon
    },
    {
        name: "Hegemony",
        url: "https://hegemony.vercel.app/",
        logo: HandCoinsIcon
    },
]

const sectionData = [
    {
        title: "Intro",
        Icon: DoorOpenIcon,
        scrollIndex: 0,
    },
    {
        title: "About Me",
        Icon: IdCardIcon,
        scrollIndex: 1,
    },
    {
        title: "Tech Stack",
        Icon: Layers3Icon,
        scrollIndex: 2,
    },
    {
        title: "Projects",
        Icon: CpuIcon,
        scrollIndex: 3,
    },
    {
        title: "Contact",
        Icon: HandshakeIcon,
        scrollIndex: 4,
    },
]

const externalLinkData = [
    {
        title: "Source Code",
        url: "https://github.com/ranjotdharni/portfolio-2",
        Icon: CodeIcon,
    },
    {
        title: "Report An Issue",
        url: "https://github.com/ranjotdharni/portfolio-2/issues",
        Icon: BugIcon,
    },
    {
        title: "Spline 3D",
        url: "https://spline.design/",
        Icon: PenToolIcon,
    },
]

export default function NavBar({ scrollRefs, contactMe, viewProjects } : { scrollRefs: React.RefObject<HTMLElement | null>[], contactMe: () => void, viewProjects: () => void }) {

    function scrollTo(index: number) {
        scrollRefs[index].current?.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'smooth'})
    }
    
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <NavHeader projects={projectData} viewProjects={viewProjects} />
            </SidebarHeader>
            
            <SidebarContent>
                <NavSections items={sectionData} scrollTo={scrollTo} />

                <Separator className="max-w-[90%] mx-auto" />

                <NavExternals items={externalLinkData} />
            </SidebarContent>

            <SidebarFooter>
                <NavProfile contactMe={contactMe} />
            </SidebarFooter>
        </Sidebar>
    )
}
