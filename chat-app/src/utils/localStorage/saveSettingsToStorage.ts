import { SettingsState } from '../../store/interfaces'
import { STORAGE_KEY } from './getSettingsFromStorage'

export const saveSettingsToStorage = (settings: SettingsState): void => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}
