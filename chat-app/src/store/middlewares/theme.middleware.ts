import { Action } from '../interfaces'
import {
    CHANGE_SETTINGS,
    ChangeSettingsPayload,
    RESET_SETTINGS,
} from '../actions/settingsActions'
import { Middleware } from 'redux'
import { Theme } from '../../const'
import { defaultSettingsState } from '../reducers/defaultSettingsState'

const isChangeThemeAction = (action: Action) => {
    return (
        action.type === CHANGE_SETTINGS &&
        (action.payload as ChangeSettingsPayload).key === 'theme'
    )
}

const isResetAction = (action: Action) => {
    return action.type === RESET_SETTINGS
}

const themes = {
    [Theme.Light]: {
        dark: '#000',
        light: '#FFF',
    },
    [Theme.Dark]: {
        dark: '#FFF',
        light: '#000',
    },
}

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
    if (isChangeThemeAction(action)) {
        const theme = (action.payload as ChangeSettingsPayload).value as Theme

        Object.entries(themes[theme]).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value)
        })
    }

    if (isResetAction(action)) {
        Object.entries(themes[defaultSettingsState.theme]).forEach(
            ([key, value]) => {
                document.documentElement.style.setProperty(`--${key}`, value)
            }
        )
    }

    next(action)
}
