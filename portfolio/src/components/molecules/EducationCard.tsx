import { ArrowUpRightIcon, InfoIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

function HoverInfo() {
    return (
        <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Button variant="outline"><InfoIcon /></Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-64 flex-col gap-2">
                <div className="font-semibold">August 2021 - May 2024</div>
                <div className="text-primary">I graduated with higher honors (magna cum laude) and multiple dean's list placements.</div>
                <div className="mt-1 text-xs text-muted-foreground font-jbm">
                    GPA: 3.82
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default function EducationCard() {

    return (
        <article className="w-full">
            <header className="w-full flex justify-start text-xl py-2">Education</header>
            <Card>
                <CardHeader>
                    <CardTitle>Computer Science</CardTitle>
                    <CardDescription>Bachelor of Science</CardDescription>
                    <CardAction>
                        <HoverInfo />
                    </CardAction>
                </CardHeader>
                <CardContent className="space-y-1">
                    <CardTitle>Relevant Coursework</CardTitle>
                    <div className="w-full space-x-1 space-y-1">
                        <Badge>Data Structures and Algorithms</Badge>
                        <Badge>Computer Software Engineering</Badge>
                        <Badge>Database Management Systems</Badge>
                        <Badge>Operating System Principles</Badge>
                        <Badge>Business & Computer Ethics</Badge>
                        <Badge>Computer Networking Fundamentals</Badge>
                    </div>
                </CardContent>
                <Separator />
                <CardFooter className="flex justify-between">
                    <span className="font-jbm text-xs">California State University, Sacramento</span>
                    <Button asChild>
                        <a href="https://www.csus.edu/" target="_blank">
                            Visit
                            <ArrowUpRightIcon />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </article>
    )
}
