import React, { useEffect, useRef } from 'react'
import { ApiEvents, Path } from '../../const'
import { useLocation } from 'react-router-dom'
import { MessageWithContext } from '../../store/actions/chatActions'
import { Message } from '../../store/interfaces'
import { getSocketIOClient } from '../../utils/getSocket'

export interface ChatProps {
    userId: string | undefined
    onNewMessage(msg: MessageWithContext): void
    onUserId(userId: string): void
}
export const Chat: React.FunctionComponent<ChatProps> = (props) => {
    const { pathname } = useLocation()
    const socket = getSocketIOClient()
    const { userId, onNewMessage, onUserId, children } = props
    const isMessageVisible = (): boolean => pathname === Path.Home
    const isRead = useRef<boolean>(isMessageVisible())

    useEffect(() => {
        socket.on(ApiEvents.Id, (id: string) => {
            onUserId(id)
        })

        socket.on(ApiEvents.NewMessage, (message: Message) => {
            onNewMessage({
                ...message,
                isRead: isRead.current,
            })
        })
    }, [])

    useEffect(() => {
        isRead.current = isMessageVisible()
    }, [pathname])

    if (userId === undefined) {
        return <h1>Loading</h1>
    }

    return <>{children}</>
}
