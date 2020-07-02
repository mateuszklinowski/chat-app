import { Action, Message } from '../interfaces'

export const SEND_MESSAGE = 'type/SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'type/RECEIVE_MESSAGE'

export interface NewMessage {
    senderId: string
    senderName: string
    content: string
}

export const sendMessage = (newMessage: NewMessage): Action<NewMessage> => ({
    type: SEND_MESSAGE,
    payload: newMessage,
})

export const receiveMessage = (message: Message): Action<Message> => ({
    type: RECEIVE_MESSAGE,
    payload: message,
})
