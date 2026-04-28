
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CarouselCardParams } from "@/lib/types/types"
import { ButtonGroup } from "../ui/button-group"
import { ArrowUpRightIcon, BugIcon, CodeIcon, NotebookTextIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function ProjectItem({ params } : { params: CarouselCardParams }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={params.src}
        alt={params.title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant={params.badge.variant || "secondary"}>{params.badge.title}</Badge>
        </CardAction>
        <CardTitle>{params.title}</CardTitle>
        <CardDescription>
          {params.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {params.desc}
      </CardContent>
      <CardFooter className="justify-between">
        <ButtonGroup>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" asChild>
                        <a href={params.codeLink}><CodeIcon /></a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Source</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" asChild>
                        <a href={params.usageLink}><NotebookTextIcon /></a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Usage</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" asChild>
                        <a href={params.reportLink}><BugIcon /></a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Bug Report</p>
                </TooltipContent>
            </Tooltip>
        </ButtonGroup>
        <Button asChild>
            <a href={params.link} target="_blank">Visit <ArrowUpRightIcon /></a>
        </Button>
      </CardFooter>
    </Card>
  )
}

