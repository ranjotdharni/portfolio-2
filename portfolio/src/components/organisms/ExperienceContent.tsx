import TriviaCard from "../molecules/TriviaCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function ExperienceContent() {

    return (
        <section className="w-full flex flex-row space-x-4">
            <Card className="w-[30%]">
                <CardHeader>
                    <CardTitle>Computer Science</CardTitle>
                    <CardDescription>Bachelor of Science</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
                
            </Card>
            <TriviaCard />
        </section>
    )
}
