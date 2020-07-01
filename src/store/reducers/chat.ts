import { Reducer } from 'redux'
import { Action, ChatState } from '../interfaces'

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

export const chatReducer: Reducer<ChatState, Action> = (state, action) => {
    if (!state) {
        return initialChatState
    }

    switch (action.type) {
        default:
            return state
    }
}
