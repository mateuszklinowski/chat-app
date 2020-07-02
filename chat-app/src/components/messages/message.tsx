import React from 'react'
import { Message } from '../../store/interfaces'
import styles from './message.module.scss'
import { ClockDisplay } from '../../const'
import { format24, formatAMAP } from '../../utils/formatters'

type MessageProps = {
    message: Message
    fromSelf: boolean
    clock: ClockDisplay
}

const timestampToTime = (clock: ClockDisplay) => (time: number): string => {
    return clock === ClockDisplay.Hours12 ? formatAMAP(time) : format24(time)
}

export const MessageComponent: React.FunctionComponent<MessageProps> = (
    props
) => {
    const {
        message: { content, senderName, timestamp },
        fromSelf,
        clock,
    } = props

    const sender = fromSelf ? '' : `${senderName}, `
    const meta = `${sender}${timestampToTime(clock)(timestamp)}`

    // Usually classNames lib take care of such things, but library for 1 use ...
    const wrapperStyle = fromSelf ? styles.selfMessage : styles.strangerMessage
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
