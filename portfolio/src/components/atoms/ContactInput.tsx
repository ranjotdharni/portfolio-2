import { ContactInputParams } from '../../lib/types/types'


export default function ContactInput(params: ContactInputParams) {
    let css = `bg-color-bg-contrast w-full md:w-[30vw] rounded-3xl font-roboto p-4 outline-none ${params.tailwind}`

    return (
        <input value={params.text} onChange={params.setText} placeholder={params.placeholder} className={css} style={{color: params.text !== '' ? 'var(--color-pink)' : 'var(--color-bg-contrast)'}} />
    )
}