import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'

import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'
const store = configureStore()

const Index = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
