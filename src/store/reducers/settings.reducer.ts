import { Reducer } from 'redux'
import { Action, SettingsState } from '../interfaces'
import { getSettingsFromStorage } from '../../utils/localStorage/getSettingsFromStorage'
import { defaultSettingsState } from './defaultSettingsState'
import {
    CHANGE_SETTINGS,
    ChangeSettingsPayload,
    RESET_SETTINGS,
} from '../actions/settingsActions'

export const initialState: SettingsState = {
    ...defaultSettingsState,
    ...getSettingsFromStorage(),
}

export const settingsReducer: Reducer<SettingsState, Action> = (
    state,
    action
): SettingsState => {
    if (!state) {
        return initialState
    }

    switch (action.type) {
        case RESET_SETTINGS:
            return defaultSettingsState
        case CHANGE_SETTINGS: {
            const payload = action.payload as ChangeSettingsPayload
            return {
                ...state,
                [payload.key]: payload.value,
            }
        }
        default:
            return state
    }
}
