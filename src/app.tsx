import React from 'react'
import './styles/index.scss'

import { ConnectedMessages } from './components/messages/connectedMessages'
import { ConnectedCreateMessage } from './components/createMessage/connectedCreateMessage'
import { ConnectedSettings } from './components/settings/connectedSettings'
import { Route, Switch } from 'react-router'
import { Navigation } from './components/navigation/navigation'

export const App: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        {/*This might be composed into pages, but as app is small there was no need*/}
                        <ConnectedMessages />
                        <ConnectedCreateMessage />
                    </Route>
                    <Route exact path="/settings">
                        <ConnectedSettings />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
