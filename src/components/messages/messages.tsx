import React from 'react'
import { Message } from '../../store/interfaces'
import { MessageComponent } from './message'
import styles from './message.module.scss'

export type MessagesProps = {
    messages: Message[]
}

export const Messages: React.FunctionComponent<MessagesProps> = (props) => {
    const { messages } = props
    return (
        <section className="box section section--main">
            <div className={styles.messagesWrapper}>
                {messages.map((msg) => (
                    <MessageComponent
                        message={msg}
                        fromSelf={false}
                        key={msg.id}
                    />
                ))}
            </div>
        </section>
    )
}
