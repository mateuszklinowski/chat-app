import React, { useEffect, useState } from 'react'
import { Input } from '../controls/input'
import Send from '../../assets/send.svg'
import styles from './createMessage.module.scss'
import { CtrlEnter } from '../../const'

export type CreateMessageProps = {
    onSubmit(message: string): void
    ctrlEnter: CtrlEnter
}

export const CreateMessage: React.FunctionComponent<CreateMessageProps> = (
    props
) => {
    const { onSubmit, ctrlEnter } = props
    const [message, setMessage] = useState<string>('')

    const handleSubmit = () => {
        if (!message) {
            return
        }

        onSubmit(message)
        setMessage('')
    }

    useEffect(() => {
        if (ctrlEnter === CtrlEnter.Off) {
            return
        }
        const handler = keydownHandler(handleSubmit)
        window.addEventListener('keydown', handler)

        return () => {
            window.removeEventListener('keydown', handler)
        }
    }, [message, ctrlEnter])

    return (
        <section className="section">
            <div className={styles.wrapper}>
                <Input
                    name="newMessage"
                    onChange={setMessage}
                    placeholder=""
                    value={message}
                />
                <button className={styles.sendBtn} onClick={handleSubmit}>
                    <Send />
                </button>
            </div>
        </section>
    )
}

const keydownHandler = (callback: () => void) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        callback()
    }
}
