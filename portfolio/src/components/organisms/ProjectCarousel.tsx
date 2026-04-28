import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CarouselCardParams } from "@/lib/types/types"
import { ProjectItem } from "../molecules/ProjectItem"

import Autoplay from "embla-carousel-autoplay"

export default function ProjectCarousel({ params } : { params: CarouselCardParams[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
            delay: 2500,
            stopOnFocusIn: true,
        }),
      ]}
      className="w-4/5 py-1"
    >
      <CarouselContent>
        {params.map(project => {
          return (
            <CarouselItem className="md:basis-1/3 py-1">
                <ProjectItem params={project} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
