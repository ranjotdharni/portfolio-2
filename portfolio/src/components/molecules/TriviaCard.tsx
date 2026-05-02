import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ButtonGroup } from "../ui/button-group"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Field, FieldLabel, FieldLegend, FieldSet } from "../ui/field"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Skeleton } from "../ui/skeleton"
import { Badge } from "../ui/badge"

type TriviaQuestion = {
    type: string
    difficulty: string
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

const DIFFICULTY_HIGHLIGHT_TAILWIND = "bg-foreground! text-background! scale-y-95"

const DIFFICULTY_EASY = "Easy"
const DIFFICULTY_MEDIUM = "Medium"
const DIFFICULTY_HARD = "Hard"

const QUESTION_RESPONSE_DETAILS: { [key :number]: string } = {
    0: "",
    1: "No Results",
    2: "Invalid Question",
    3: "No Token",
    4: "Token Exhausted",
    5: "Try again in 5 seconds...",
}

function SkeletonLoader() {
    return (
        <div className="flex w-full max-w-xs flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-1" />
            <Skeleton className="h-4 w-1/2 mt-1" />
            <Skeleton className="h-4 w-1/2 mt-1" />
            <Skeleton className="h-4 w-1/2 mt-1" />
        </div>
    )
}

function Question({ question, setResponse, checkInvalidState } : { question: TriviaQuestion, setResponse: (answer: string) => void, checkInvalidState: (answer: string) => boolean }) {
    return (
        <FieldSet className="w-full">
            <div className="w-full flex flex-row justify-end">
                <Badge variant="secondary">{question.category}</Badge>
            </div>
            <div>
                <FieldLegend variant="label">{question.question}</FieldLegend>
            </div>
            <RadioGroup defaultValue={question.incorrect_answers[0]} onValueChange={setResponse}>
                {
                    question.incorrect_answers.map(answer => {
                        const id = `_ANSWER_{${answer}}`
                        const invalidState = checkInvalidState(answer)
                        return (
                            <Field key={answer} orientation="horizontal" data-invalid={invalidState}>
                                <RadioGroupItem value={answer} id={id} aria-invalid={invalidState} />
                                <FieldLabel htmlFor={id} className="font-normal">
                                    {answer}
                                </FieldLabel>
                            </Field>
                        )
                    })
                }
            </RadioGroup>
        </FieldSet>
    )
}

export default function TriviaCard() {
    const [difficulty, setDifficulty] = useState<string>(DIFFICULTY_EASY)
    const [question, setQuestion] = useState<TriviaQuestion | undefined>()
    const [response, setResponse] = useState<string>("")

    const [message, setMessage] = useState<string>("")
    const [correct, setCorrect] = useState<boolean>(false)
    const [invalidAnswer, setInvalidAnswer] = useState<boolean>(false)

    function changeResponse(answer: string) {
        setMessage("")
        setCorrect(false)
        setResponse(answer)
        setInvalidAnswer(false)
    }

    function submit() {
        if (response === question?.correct_answer) {
            setCorrect(true)
            setMessage("Correct")
            setInvalidAnswer(false)
        }
        else {
            setCorrect(false)
            setInvalidAnswer(true)
        }
    }

    function checkInvalidAnswer(answer: string) {
        return invalidAnswer && response === answer
    }

    async function getTriviaQuestion() {
        setQuestion(undefined)
        setMessage("")
        setResponse("")
        setCorrect(false)
        setInvalidAnswer(false)

        const url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty.toLowerCase()}&type=multiple`

        const result: { response_code: number, results: TriviaQuestion[] } = await fetch(url).then(response => response.json())

        if (result.response_code !== 0) {
            setMessage(QUESTION_RESPONSE_DETAILS[result.response_code])
            setCorrect(false)
            return
        }

        const q: TriviaQuestion = result.results[0]

        q.incorrect_answers.splice(Math.floor(Math.random() * (q.incorrect_answers.length + 1)), 0, q.correct_answer) // unify correct and incorrect answers into one array
        setResponse(q.incorrect_answers[0])
        setQuestion(q)
    }

    useEffect(() => {
        getTriviaQuestion()
    }, [])

    return (
        <Card className="w-[30%] justify-evenly">
            <CardHeader>
                <CardTitle>Trivia</CardTitle>
                <CardDescription>Play a Game</CardDescription>
                <CardAction>
                    <ButtonGroup>
                        <Button variant="outline" className={difficulty === DIFFICULTY_EASY ? DIFFICULTY_HIGHLIGHT_TAILWIND : undefined} onClick={() => {setDifficulty(DIFFICULTY_EASY)}}>{DIFFICULTY_EASY}</Button>
                        <Button variant="outline" className={difficulty === DIFFICULTY_MEDIUM ? DIFFICULTY_HIGHLIGHT_TAILWIND : undefined} onClick={() => {setDifficulty(DIFFICULTY_MEDIUM)}}>{DIFFICULTY_MEDIUM}</Button>
                        <Button variant="outline" className={difficulty === DIFFICULTY_HARD ? DIFFICULTY_HIGHLIGHT_TAILWIND : undefined} onClick={() => {setDifficulty(DIFFICULTY_HARD)}}>{DIFFICULTY_HARD}</Button>
                    </ButtonGroup>
                </CardAction>
            </CardHeader>
            <CardContent>
                {
                    question === undefined ? 
                    <SkeletonLoader /> :
                    <Question question={question} setResponse={changeResponse} checkInvalidState={checkInvalidAnswer} />

                }
            </CardContent>
            <Separator />
            <CardFooter className="justify-between">
                <span className={`text-xs ${correct ? 'text-green-700' : 'text-red-700'}`}>{message}</span>
                <div className="space-x-2">
                    <Button size="lg" onClick={submit}>Submit</Button>
                    <Button size="lg" variant="outline" onClick={getTriviaQuestion}>Next Question</Button>
                </div>
            </CardFooter>
        </Card>
    )
}
