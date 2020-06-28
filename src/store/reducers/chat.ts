import { Reducer } from 'redux'
import { Action, ChatState } from '../interfaces'

const initialChatState: ChatState = {
    messages: [],
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
