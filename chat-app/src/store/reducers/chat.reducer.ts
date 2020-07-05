import { Reducer } from 'redux'
import { Action, ChatState } from '../interfaces'
import {
    MessageWithContext,
    READ_MESSAGES,
    RECEIVE_MESSAGE,
    SEND_MESSAGE,
} from '../actions/chatActions'

const initialChatState: ChatState = {
    messages: [],
    unread: 0,
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
            const payload = (action as Action<MessageWithContext>).payload
            return {
                ...state,
                messages: [...state.messages, payload],
                unread: payload.isRead ? state.unread : state.unread + 1,
            }
        }
        case SEND_MESSAGE:
            // In prod style chat there could be some state in between sending a message by user and confirmation
            return state
        case READ_MESSAGES:
            return {
                ...state,
                unread: 0,
            }
        default:
            return state
    }
}
