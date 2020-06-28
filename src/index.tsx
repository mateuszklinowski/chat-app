import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'

import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'

const store = configureStore()

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
