import { Middleware } from 'redux'
import { Action } from '../interfaces'
import { SEND_MESSAGE } from '../actions/chatActions'
import socketIOClient from 'socket.io-client'
import { ApiActions, SOCKET_ENDPOINT } from '../../const'

const isSendMessageAction = (action: Action) => action.type === SEND_MESSAGE

export const sendMessageMiddleware: Middleware = (state) => (next) => (
    action
) => {
    if (isSendMessageAction(action)) {
        const socket = socketIOClient(SOCKET_ENDPOINT)
        socket.emit(ApiActions.SendMessage, action.payload)
    }

    next(action)
}
