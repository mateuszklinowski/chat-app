import { Theme } from '../const'

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

export const setAppTheme = (theme: Theme): void => {
    Object.entries(themes[theme]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
    })
}
