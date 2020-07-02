import { Lang } from './const'

type Translations = {
    [key in Lang]: {
        [key: string]: string
    }
}

export const translations: Translations = {
    [Lang.En]: {
        'NAV.CHAT': 'Chat',
        'NAV.SETTINGS': 'Settings',
        'SETTINGS.USER': 'User name',
        'SETTINGS.THEME': 'Interface color',
        'SETTINGS.THEME.LIGHT': 'Light',
        'SETTINGS.THEME.DARK': 'Dark',
        'SETTINGS.CLOCK': 'Clock display',
        'SETTINGS.CLOCK.12': '12 Hours',
        'SETTINGS.CLOCK.24': '24 Hours',
        'SETTINGS.CTRL_ENTER': 'Send message on CTRL + ENTER',
        'SETTINGS.LANGUAGE': 'Language',
        'SETTINGS.RESET': 'Reset to defaults',
    },
    [Lang.Pl]: {
        'NAV.CHAT': 'Chat',
        'NAV.SETTINGS': 'Ustawienia',
        'SETTINGS.USER': 'Nazwa użytkownika',
        'SETTINGS.THEME': 'Kolor interfejcu',
        'SETTINGS.THEME.LIGHT': 'Jasny',
        'SETTINGS.THEME.DARK': 'Ciemny',
        'SETTINGS.CLOCK': 'Zegar',
        'SETTINGS.CLOCK.12': '12 godzinny',
        'SETTINGS.CLOCK.24': '24 godzinny',
        'SETTINGS.CTRL_ENTER': 'Wyśli wiadomość z CTRL + ENTER',
        'SETTINGS.LANGUAGE': 'Język',
        'SETTINGS.RESET': 'Zresetuj ustawienia',
    },
}
