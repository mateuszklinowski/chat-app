import { ClockDisplay, CtrlEnter, Lang, Theme } from '../../const'
import { SettingsState } from '../interfaces'

const fakeServiceToGenerateNames = (): string => {
    const names = [
        'Lui the Avid',
        'Rob the Dandy',
        'Awesome Anna',
        'Delightful Stefan',
        'Colossal Magie',
    ]

    return names[Math.floor(Math.random() * names.length)]
}

export const defaultSettingsState: SettingsState = {
    name: fakeServiceToGenerateNames(),
    theme: Theme.Light,
    ctrlEnter: CtrlEnter.On,
    clockDisplay: ClockDisplay.Hours24,
    lang: Lang.En,
}
