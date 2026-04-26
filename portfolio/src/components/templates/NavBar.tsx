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
        url: "https://masquerades.netlify.app/",
        logo: FlaskConicalIcon
    },
    {
        name: "Hegemony",
        url: "https://masquerades.netlify.app/",
        logo: HandCoinsIcon
    },
]

const sectionData = [
    {
        title: "Intro",
        Icon: DoorOpenIcon,
    },
    {
        title: "About Me",
        Icon: IdCardIcon,
    },
    {
        title: "Tech Stack",
        Icon: Layers3Icon,
    },
    {
        title: "Projects",
        Icon: CpuIcon,
    },
    {
        title: "Contact",
        Icon: HandshakeIcon,
    },
]

const externalLinkData = [
    {
        title: "Source Code",
        url: "",
        Icon: CodeIcon,
    },
    {
        title: "Report An Issue",
        url: "",
        Icon: BugIcon,
    },
    {
        title: "Spline 3D",
        url: "",
        Icon: PenToolIcon,
    },
]

export default function NavBar() {
    
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <NavHeader projects={projectData} />
            </SidebarHeader>
            
            <SidebarContent>
                <NavSections items={sectionData} />

                <Separator className="max-w-[90%] mx-auto" />

                <NavExternals items={externalLinkData} />
            </SidebarContent>

            <SidebarFooter>
                <NavProfile />
            </SidebarFooter>
        </Sidebar>
    )
}
