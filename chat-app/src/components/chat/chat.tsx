import React, { useEffect, useRef } from 'react'
import socketIOClient from 'socket.io-client'
import { ApiEvents, Path, SOCKET_ENDPOINT } from '../../const'
import { useLocation } from 'react-router-dom'
import { MessageWithContext } from '../../store/actions/chatActions'
import { Message } from '../../store/interfaces'

export interface ChatProps {
    userId: string | undefined
    onNewMessage(msg: MessageWithContext): void
    onUserId(userId: string): void
}
const socket = socketIOClient(SOCKET_ENDPOINT)
export const Chat: React.FunctionComponent<ChatProps> = (props) => {
    const { pathname } = useLocation()
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
