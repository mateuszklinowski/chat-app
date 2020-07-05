import { Action, Message } from '../interfaces'

export const SEND_MESSAGE = 'type/SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'type/RECEIVE_MESSAGE'
export const READ_MESSAGES = 'type/READ_MESSAGES'

export interface NewMessage {
    senderId: string
    senderName: string
    content: string
}

export const sendMessage = (newMessage: NewMessage): Action<NewMessage> => ({
    type: SEND_MESSAGE,
    payload: newMessage,
})

export interface MessageWithContext extends Message {
    isRead: boolean
}

export const receiveMessage = (
    message: MessageWithContext
): Action<MessageWithContext> => ({
    type: RECEIVE_MESSAGE,
    payload: message,
})

export const readMessages = (): Action => ({
    type: READ_MESSAGES,
})
