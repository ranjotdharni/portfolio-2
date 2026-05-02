import { Badge } from "../ui/badge"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../ui/card"

type ExperienceItemParams = { 
    title: string 
    time: string 
    company: string 
    badgeTailwind?: string 
}

const EXPERIENCE_DETAILS: ExperienceItemParams[] = [
    {
        title: "Customer Experience Associate",
        time: "June 2025 - Present",
        company: "Amazon",
        badgeTailwind: "bg-orange-500",
    },
    {
        title: "WordPress Developer (Volunteer)",
        time: "February 2024 - June 2024",
        company: "Resilience",
        badgeTailwind: "bg-yellow-500",
    },
    {
        title: "Service Desk Associate",
        time: "April 2021 - September 2022",
        company: "Target",
        badgeTailwind: "bg-red-600",
    },
]

export function ExperienceItem({ title, time, company, badgeTailwind } : ExperienceItemParams) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{time}</CardDescription>

                <CardAction>
                    <Badge asChild className={badgeTailwind}>
                        <a>{company}</a>
                    </Badge>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default function ExperienceCard() {
    return (
        <article className="space-y-6">
            <header className="w-full flex justify-end text-xl py-2">Experience</header>
            {
                EXPERIENCE_DETAILS.map(item => {
                    return (
                        <ExperienceItem key={item.title} title={item.title} time={item.time} company={item.company} badgeTailwind={item.badgeTailwind} />
                    )
                })
            }
        </article>
    )
}
