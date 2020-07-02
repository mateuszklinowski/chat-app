import { applyMiddleware, createStore, Store } from 'redux'
import { rootReducer } from './reducers'
import { Action, State } from './interfaces'
import { composeWithDevTools } from 'redux-devtools-extension'
import { themeMiddleware } from './middlewares/themeMiddleware'

export const configureStore = (): Store<State> => {
    const middlewares = [themeMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const composedEnhancers = composeWithDevTools(middlewareEnhancer)

    // This {} types are there due to some bad change in typing from Redux 3.7.2 into 4.0+
    // This issue is known and force to provide all 4 type arguments
    // eslint-disable-next-line @typescript-eslint/ban-types
    return createStore<State, Action, {}, {}>(rootReducer, composedEnhancers)
}
