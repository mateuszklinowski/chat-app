import React from 'react'
import { Message } from '../../store/interfaces'
import { MessageComponent } from './message'
import styles from './message.module.scss'
import { ClockDisplay } from '../../const'

export type MessagesProps = {
    messages: Message[]
    clock: ClockDisplay
}

export const Messages: React.FunctionComponent<MessagesProps> = (props) => {
    const { messages, clock } = props
    return (
        <section className="box section section--main">
            <div className={styles.messagesWrapper}>
                {messages.map((msg) => (
                    <MessageComponent
                        message={msg}
                        fromSelf={false}
                        key={msg.id}
                        clock={clock}
                    />
                ))}
            </div>
        </section>
    )
}
