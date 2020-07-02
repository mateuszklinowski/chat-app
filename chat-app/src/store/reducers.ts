import { combineReducers } from 'redux'
import { State } from './interfaces'
import { chatReducer } from './reducers/chat.reducer'
import { settingsReducer } from './reducers/settings.reducer'
import { metaReducer } from './reducers/meta.reducer'

export const rootReducer = combineReducers<State>({
    chat: chatReducer,
    settings: settingsReducer,
    meta: metaReducer,
})
