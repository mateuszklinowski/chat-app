import { Reducer } from 'redux'
import { Action, ChatState, Message } from '../interfaces'
import { RECEIVE_MESSAGE, SEND_MESSAGE } from '../actions/chatActions'

const initialChatState: ChatState = {
    messages: [],
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
