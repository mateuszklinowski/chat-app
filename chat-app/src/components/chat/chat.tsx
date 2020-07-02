import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import { Message } from '../../store/interfaces'
import { ApiEvents, SOCKET_ENDPOINT } from '../../const'

export interface ChatProps {
    userId: string | undefined
    onNewMessage(msg: Message): void
    onUserId(userId: string): void
}

export const Chat: React.FunctionComponent<ChatProps> = (props) => {
    const { userId, onNewMessage, onUserId, children } = props

    useEffect(() => {
        const socket = socketIOClient(SOCKET_ENDPOINT)
        socket.on(ApiEvents.Id, (id: string) => {
            onUserId(id)
        })

        socket.on(ApiEvents.NewMessage, (message: Message) => {
            onNewMessage(message)
        })
    }, [])

    if (userId === undefined) {
        return <h1>Loading</h1>
    }

    return <>{children}</>
}
