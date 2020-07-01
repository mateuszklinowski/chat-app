import React from 'react'
import { Message } from '../../store/interfaces'
import styles from './message.module.scss'

type MessageProps = {
    message: Message
    fromSelf: boolean
}

const timestampToTime = (time: number): string => {
    const date = new Date(time)
    const minutes =
        date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    return `${date.getHours()}:${minutes}`
}

export const MessageComponent: React.FunctionComponent<MessageProps> = (
    props
) => {
    const {
        message: { content, senderName, timestamp },
        fromSelf,
    } = props

    const sender = fromSelf ? '' : `${senderName}, `
    const meta = `${sender}${timestampToTime(timestamp)}`

    // Usually classNames lib take care of such things, but library for 1 use ...
    const wrapperStyle =
        senderName === 'kappa1' ? styles.selfMessage : styles.strangerMessage
    return (
        <div className="row">
            <div className={wrapperStyle}>
                <div>
                    <div className={styles.messageMeta}>{meta}</div>
                    <div className={styles.message}>{content}</div>
                </div>
            </div>
        </div>
    )
}
