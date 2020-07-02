import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'

import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { Intl } from './components/intl/Intl'

const store = configureStore()

const Index = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Intl>
                    <App />
                </Intl>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
