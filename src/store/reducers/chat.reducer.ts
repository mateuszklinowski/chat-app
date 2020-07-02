import { Reducer } from 'redux'
import { Action, ChatState, Message } from '../interfaces'
import { RECEIVE_MESSAGE, SEND_MESSAGE } from '../actions/chatActions'

const initialChatState: ChatState = {
    messages: [
        {
            timestamp: new Date().getTime(),
            senderId: 'kappa',
            senderName: 'kappa',
            content: 'Message 1',
            id: 'uuid1',
        },
        {
            timestamp: new Date().getTime(),
            senderId: 'kappa1',
            senderName: 'kappa1',
            content: 'Message ggg',
            id: 'uuid2',
        },
        {
            timestamp: new Date().getTime(),
            senderId: 'kappa2',
            senderName: 'kappa2',
            content:
                'Message ssage 2323 ssage 2323 ssage 2323ssage 2323 ssage 2323ssage 2323ssage 2323 ssage 2323 ssage 2323 ssage 2323 232323',
            id: 'uuid2',
        },
    ],
}

export const chatReducer: Reducer<ChatState, Action> = (
    state,
    action
): ChatState => {
    if (!state) {
        return initialChatState
    }

    switch (action.type) {
        case RECEIVE_MESSAGE: {
            const payload = (action as Action<Message>).payload
            return {
                ...state,
                messages: [...state.messages, payload],
            }
        }
        case SEND_MESSAGE:
            // In prod style chat there could be some state in between sending a message by user and confirmation
            return state

        default:
            return state
    }
}
