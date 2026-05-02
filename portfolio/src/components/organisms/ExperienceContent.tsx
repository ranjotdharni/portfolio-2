import EducationCard from "../molecules/EducationCard";
import ExperienceCard from "../molecules/ExperienceCard";
import LocationCard from "../molecules/LocationCard";
import SkillsCard from "../molecules/SkillsCard";
import TriviaCard from "../molecules/TriviaCard";

export default function ExperienceContent() {

    return (
        <section className="w-full flex flex-col justify-start lg:flex-row lg:justify-evenly">
            <div className="w-full lg:w-[30%] flex flex-col justify-between">
                <EducationCard />
                <SkillsCard />
            </div>
            <div className="w-full lg:w-[30%] flex flex-col justify-between">
                <LocationCard />
                <ExperienceCard />
            </div>
            <TriviaCard />
        </section>
    )
}
