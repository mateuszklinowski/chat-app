import { combineReducers } from 'redux'
import { State } from './interfaces'
import { chatReducer } from './reducers/chat'
import { metaReducer } from './reducers/meta'

export const rootReducer = combineReducers<State>({
    chat: chatReducer,
    meta: metaReducer,
})
