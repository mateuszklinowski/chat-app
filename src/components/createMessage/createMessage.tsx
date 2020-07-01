import React from 'react'
import { Input } from '../controls/input'
import send from '../../assets/send.svg'
import styles from './createMessage.module.scss'
import { noop } from '../../shared/noop'

export type MessageInputProps = {
    onSubmit(message: string): void
}

export const CreateMessage: React.FunctionComponent<MessageInputProps> = () => {
    return (
        <section className="section">
            <div className={styles.wrapper}>
                <Input name="newMessage" onChange={noop} placeholder="kappa" />
                <button className={styles.sendBtn}>
                    <img src={send} alt="kappa" />
                </button>
            </div>
        </section>
    )
}
