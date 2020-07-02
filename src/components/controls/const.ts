import { Option } from './radio'
import { SelectOption } from './select'
import { ClockDisplay, CtrlEnter, Lang, Theme } from '../../const'

export const interfaceOptions: Option[] = [
    { label: 'Light', value: Theme.Light, id: Theme.Light },
    { label: 'Dark', value: Theme.Dark, id: Theme.Dark },
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
    { label: 'On', value: CtrlEnter.On, id: CtrlEnter.On },
    { label: 'Off', value: CtrlEnter.Off, id: CtrlEnter.Off },
]

export const langOptions: SelectOption[] = [
    { value: Lang.En, label: 'English' },
    { value: Lang.Pl, label: 'Polish' },
]
