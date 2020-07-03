import React from 'react'
import { Message } from '../../store/interfaces'
import styles from './message.module.scss'
import { ClockDisplay } from '../../const'
import { format24, formatAMAP } from '../../utils/formatters'
import { findFirstYouTubeLink } from '../../utils/findFirstYouTubeLink'
import { YouTubeFrame } from './YouTubeFrame'
import Emoji from 'react-emoji-render'

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

    const youTubeLink: string | undefined = findFirstYouTubeLink(content)

    return (
        <div className="row">
            <div className={wrapperStyle}>
                <div className={styles.messageBox}>
                    <div className={styles.messageMeta}>{meta}</div>
                    <div className={styles.message}>{enchant(content)}</div>
                    <YouTubeFrame url={youTubeLink} />
                </div>
            </div>
        </div>
    )
}

const enchant = (text: string) => {
    // Regex comes from SODD -> stack overflow driven development
    const urlMatcher = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi
    const subStrings = text
        .split(urlMatcher)
        .filter((string) => string !== 'https')
        .map((baseText, index) => {
            if (!urlMatcher.test(baseText)) {
                return <Emoji text={baseText} key={index} />
            }

            return (
                <a href={baseText} key={baseText}>
                    {baseText}
                </a>
            )
        })

    return subStrings
}
