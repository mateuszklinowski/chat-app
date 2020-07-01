import { Option } from './radio'
import { SelectOption } from './select'

enum InterfaceColor {
    Light = 'light',
    Dark = 'dark',
}

enum ClockDisplay {
    Hours12 = '12hours',
    Hours24 = '24hours',
}

enum EnterCtrl {
    On = 'on',
    Off = 'off',
}

enum Langs {
    En = 'en',
    Pl = 'pl',
}

export const interfaceOptions: Option[] = [
    { label: 'Light', value: InterfaceColor.Light, id: InterfaceColor.Light },
    { label: 'Dark', value: InterfaceColor.Dark, id: InterfaceColor.Dark },
]

export const clockOptions: Option[] = [
    {
        label: '12 Hours',
        value: ClockDisplay.Hours12,
        id: ClockDisplay.Hours12,
    },
    {
        label: '24 Hours',
        value: ClockDisplay.Hours24,
        id: ClockDisplay.Hours24,
    },
]

export const ctrlEnterOptions: Option[] = [
    { label: 'On', value: EnterCtrl.On, id: EnterCtrl.On },
    { label: 'Off', value: EnterCtrl.Off, id: EnterCtrl.Off },
]

export const langOptions: SelectOption[] = [
    { value: Langs.En, label: 'English' },
    { value: Langs.Pl, label: 'Polish' },
]
