import { TechItemParams } from '../../lib/types/types'
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
import { Badge } from '../ui/badge'
import { NotebookTextIcon } from 'lucide-react'


export default function TechItem(params: TechItemParams) {

    /*return (
        <a href={params.link} target='_blank' className='w-full h-[15vh] flex flex-row justify-between items-center p-8 space-x-4 rounded-xl border-2' style={{color: params.textColor, backgroundColor: params.backgroundColor, borderColor: params.borderColor}}>
            <img src={params.icon} className='h-full aspect-square' />
            <p className='text-3xl font-jbm'>{params.title}</p>
        </a>
    )*/

    return (
        <Card className="w-full max-w-sm ml-0.5 md:ml-0 pb-0">
            <CardHeader>
                <CardTitle className='flex flex-row items-center'>
                    <figure className='h-7 aspect-square mr-2'>
                        <img src={params.icon} />
                    </figure>
                    {params.title}
                </CardTitle>
                <CardDescription>
                    {params.desc}
                </CardDescription>
                <CardAction>
                    <Button variant="ghost" asChild>
                        <a href={params.link} target='_blank'><NotebookTextIcon /></a>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className='flex flex-row items-end flex-wrap p-0 pl-4'>
                    {
                        params.projects.slice(0, 2).map(project => {
                            return (
                                <Badge variant="outline" className='mr-1 mt-1' asChild>
                                    <a href={project.link} target='_blank'>
                                        <span style={{color: project.color}}>{project.title}</span>
                                    </a>
                                </Badge>
                            )
                        })
                    }
                    {
                        params.projects.length > 2 
                        ?
                        <Badge variant="secondary" className='mr-1 mt-1'>
                            {`+${params.projects.length - 2} more...`}
                        </Badge>
                        :
                        <></>
                    }
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    )
}