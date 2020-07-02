import { Action, MetaState } from '../interfaces'
import { Reducer } from 'redux'
import { RECEIVE_USER_ID } from '../actions/metaActions'

const initialState: MetaState = {
    userId: undefined,
}

export const metaReducer: Reducer<MetaState, Action> = (
    state,
    action
): MetaState => {
    if (!state) {
        return initialState
    }

    switch (action.type) {
        case RECEIVE_USER_ID: {
            const payload = (action as Action<string>).payload
            return {
                ...state,
                userId: payload,
            }
        }
        default:
            return state
    }
}
