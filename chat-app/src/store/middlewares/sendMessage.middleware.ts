import { Middleware } from 'redux'
import { Action } from '../interfaces'
import { SEND_MESSAGE } from '../actions/chatActions'
import { ApiActions } from '../../const'
import { getSocketIOClient } from '../../utils/getSocket'

const isSendMessageAction = (action: Action) => action.type === SEND_MESSAGE

export const sendMessageMiddleware: Middleware = () => (next) => (action) => {
    if (isSendMessageAction(action)) {
        const socket = getSocketIOClient()
        socket.emit(ApiActions.SendMessage, action.payload)
    }

    next(action)
}
