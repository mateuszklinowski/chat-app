import React from 'react'
import { Message } from '../../store/interfaces'
import { MessageComponent } from './message'
import styles from './message.module.scss'
import { ClockDisplay } from '../../const'

export type MessagesProps = {
    messages: Message[]
    clock: ClockDisplay
    userId: string
}

export const Messages: React.FunctionComponent<MessagesProps> = (props) => {
    const { messages, clock, userId } = props
    return (
        <section className="box section section--main">
            <div className={styles.messagesWrapper}>
                {messages.map((msg) => (
                    <MessageComponent
                        message={msg}
                        fromSelf={msg.senderId === userId}
                        key={msg.id}
                        clock={clock}
                    />
                ))}
            </div>
        </section>
    )
}
