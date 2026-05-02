import { InfoIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

type SkillParams = {
    name: string
    desc: string
}

const SKILLS_TECHNICAL: SkillParams[] = [
    {
        name: "Front End Design",
        desc: "UI/UX"
    },
    {
        name: "Back End Design",
        desc: "Robust Servers"
    },
    {
        name: "Documentation",
        desc: "Maintainable Development"
    },
    {
        name: "Cloud Deployment",
        desc: "Scalable Systems"
    }
]

const SKILLS_PRACTICAL: SkillParams[] = [
    {
        name: "Communication",
        desc: "Effective Dialogue"
    },
    {
        name: "Organization",
        desc: "Structured Approaches"
    },
    {
        name: "Time Management",
        desc: "Meets Deadlines"
    },
    {
        name: "Customer Service",
        desc: "People Skills"
    },
]

const SKILLS_LANGUAGE: SkillParams[] = [
    {
        name: "HTML",
        desc: "Hyper Text Markup Language"
    },
    {
        name: "CSS",
        desc: "Cascading Style Sheet"
    },
    {
        name: "JavaScript",
        desc: "Browser Scripting"
    },
    {
        name: "Python",
        desc: "Back End Scripting"
    },
    {
        name: "Java",
        desc: "Object-Oriented"
    },
    {
        name: "Structured Query Language",
        desc: "Relational Database"
    }
]

function SkillItem({ name, desc } : SkillParams) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge>{name}</Badge>
            </TooltipTrigger>
            <TooltipContent>
                <p>{desc}</p>
            </TooltipContent>
        </Tooltip>
    )
}

function SkillsTabs() {
    return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList>
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="practical">Practical</TabsTrigger>
        <TabsTrigger value="languages">Languages</TabsTrigger>
      </TabsList>
      <TabsContent value="technical">
        <Card>
            <CardHeader>
                <CardDescription className="flex flex-row items-center font-jbm">
                    <InfoIcon className="scale-75 mr-1" />
                    Hover over a skill
                </CardDescription>
            </CardHeader>
            <CardContent className="space-x-2 space-y-1">
                {
                    SKILLS_TECHNICAL.map(skill => {
                        return (
                            <SkillItem key={skill.name} {...skill} />
                        )
                    })
                }
            </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="practical">
        <Card>
            <CardHeader>
                <CardDescription className="flex flex-row items-center font-jbm">
                    <InfoIcon className="scale-75 mr-1" />
                    Hover over a skill
                </CardDescription>
            </CardHeader>
            <CardContent className="space-x-2 space-y-1">
                {
                    SKILLS_PRACTICAL.map(skill => {
                        return (
                            <SkillItem key={skill.name} {...skill} />
                        )
                    })
                }
            </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="languages">
        <Card>
            <CardHeader>
                <CardDescription className="flex flex-row items-center font-jbm">
                    <InfoIcon className="scale-75 mr-1" />
                    Hover over a skill
                </CardDescription>
            </CardHeader>
            <CardContent className="space-x-2 space-y-1">
                {
                    SKILLS_LANGUAGE.map(skill => {
                        return (
                            <SkillItem key={skill.name} {...skill} />
                        )
                    })
                }
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default function SkillsCard() {
    return (
        <article className="w-full mt-4">
            <header className="w-full flex justify-start text-xl py-2">Skills</header>
            <SkillsTabs />
        </article>
    )
}
