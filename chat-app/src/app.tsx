import React from 'react'
import './styles/index.scss'

import { ConnectedMessages } from './components/messages/connectedMessages'
import { ConnectedCreateMessage } from './components/createMessage/connectedCreateMessage'
import { ConnectedSettings } from './components/settings/connectedSettings'
import { Route, Switch } from 'react-router'
import { Navigation } from './components/navigation/navigation'
import { Path } from './const'
import { ConnectedChat } from './components/chat/connectedChat'

export const App: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <ConnectedChat>
                    <Navigation />
                    <Switch>
                        <Route exact path={Path.Home}>
                            {/*This might be composed into pages, but as app is small there was no need*/}
                            <ConnectedMessages />
                            <ConnectedCreateMessage />
                        </Route>
                        <Route exact path={Path.Settings}>
                            <ConnectedSettings />
                        </Route>
                    </Switch>
                </ConnectedChat>
            </div>
        </div>
    )
}
