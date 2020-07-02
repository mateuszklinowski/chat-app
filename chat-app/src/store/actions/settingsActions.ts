import { Action, SettingsState } from '../interfaces'

export const CHANGE_SETTINGS = 'type/CHANGE_SETTINGS'
export const RESET_SETTINGS = 'type/RESET_SETTINGS'

export const resetSettings = (): Action => ({
    type: RESET_SETTINGS,
})

export interface ChangeSettingsPayload<
    K extends keyof SettingsState = keyof SettingsState
> {
    key: K
    value: SettingsState[K]
}

export const changeSettings = <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
): Action<ChangeSettingsPayload<K>> => ({
    type: CHANGE_SETTINGS,
    payload: {
        key,
        value,
    },
})
