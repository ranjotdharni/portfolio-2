import { useEffect, useState } from 'react'

export default function useNotify(initial?: string): [string, (message: string) => void] {
    const [message, setMessage] = useState<string>(initial ? initial : '')

    useEffect(() => {
        let timeoutId: number | undefined

        function startTimeout(): number {
            if (timeoutId)
                window.clearTimeout(timeoutId)

            return window.setTimeout(()=> {
                timeoutId = undefined
                setMessage('')
            }, 8000)
        }

        function stopTimeout() {
            if (timeoutId)
                window.clearTimeout(timeoutId)
        }

        if (message !== '')
            timeoutId = startTimeout()

        return stopTimeout
    }, [message])

    return [message, setMessage]
}