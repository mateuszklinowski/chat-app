import React, { ReactNode } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { applyMiddleware, createStore, Store } from 'redux'
import { State } from '../store/interfaces'
import { Provider } from 'react-redux'
import { ConnectedTheme } from '../components/theme/Theme'
import { rootReducer } from '../store/reducers'
import { middlewares } from '../store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { Intl } from '../components/intl/Intl'

interface TestOptions extends RenderOptions {
    initialState?: Partial<State>
}

interface RenderWithStore extends RenderResult {
    store: Store
}
export const renderWithApp = (
    component: React.ReactElement,
    testOptions: TestOptions = {}
): RenderWithStore => {
    const { initialState = {} } = testOptions
    // This is test helper I usually setup for projects.
    // This allow to develop more complex components test quicker as the "jungle" aka app is already prepared
    // So developer experience is similar to just using build i render from RTL
    // In normal scale app there would also be things like modal manager, locale provider etc. here

    const store: Store = createStore(
        rootReducer,
        {
            ...initialState,
        },
        applyMiddleware(...middlewares)
    )

    const Wrapper = ({ children }: { children: ReactNode }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Intl>
                        <ConnectedTheme>{children}</ConnectedTheme>
                    </Intl>
                </BrowserRouter>
            </Provider>
        )
    }

    return { store, ...render(component, { ...testOptions, wrapper: Wrapper }) }
}
