import { Action, MetaState } from '../interfaces'
import { Reducer } from 'redux'

// TODO
const initialState: MetaState = {
    userId: '1234',
    isLoading: false,
}

export const metaReducer: Reducer<MetaState, Action> = (state, action) => {
    if (!state) {
        return initialState
    }

    switch (action.type) {
        default:
            return state
    }
}
