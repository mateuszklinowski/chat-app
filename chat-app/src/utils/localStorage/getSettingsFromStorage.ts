import { SettingsState } from '../../store/interfaces'
import { Maybe, maybeMap } from '../maybeMap'

export const STORAGE_KEY = 'settings'

export const getSettingsFromStorage = (): Partial<SettingsState> => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    const parseSavedState = (s: string): Partial<SettingsState> => JSON.parse(s)
    return (
        maybeMap<Maybe<string>, Partial<SettingsState>>(
            parseSavedState,
            saved
        ) || {}
    )
}
