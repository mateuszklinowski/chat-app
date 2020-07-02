import React from 'react'
import { Button } from '../button/button'
import { Input } from '../controls/input'
import { Radio } from '../controls/radio'
import {
    clockOptions,
    ctrlEnterOptions,
    interfaceOptions,
    langOptions,
} from '../controls/const'
import { Select } from '../controls/select'
import { SettingsState } from '../../store/interfaces'
import { ClockDisplay, CtrlEnter, Lang, Theme } from '../../const'

export type SettingsProps = {
    onReset(): void
    onSettingsChange: <K extends keyof SettingsState>(
        key: K,
        value: SettingsState[K]
    ) => void
    name: string
    theme: Theme
    clockDisplay: ClockDisplay
    ctrlEnter: CtrlEnter
    lang: Lang
}

export const Settings: React.FunctionComponent<SettingsProps> = (props) => {
    const { onReset, onSettingsChange, ...settings } = props

    const handleSettingsChange = <K extends keyof SettingsState>(key: K) => (
        value: SettingsState[K]
    ) => {
        onSettingsChange(key, value)
    }

    return (
        <>
            <div className="box section section--main">
                <div className="row">
                    <Input
                        name="userName"
                        label="User name"
                        onChange={handleSettingsChange('name')} // TODO debounce or trigger on blur or exit
                        value={settings.name}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Interface color"
                        name="interfaceColor"
                        onChange={handleSettingsChange('theme')}
                        options={interfaceOptions}
                        value={settings.theme}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Clock display"
                        name="clockDisplay"
                        onChange={handleSettingsChange('clockDisplay')}
                        options={clockOptions}
                        value={settings.clockDisplay}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Send message on CTRL + ENTER"
                        name="ctrlEnter"
                        onChange={handleSettingsChange('ctrlEnter')}
                        options={ctrlEnterOptions}
                        value={settings.ctrlEnter}
                    />
                </div>
                <div className="row">
                    <Select
                        label="Language"
                        options={langOptions}
                        name="lang"
                        onChange={handleSettingsChange('lang')}
                    />
                </div>
            </div>
            <div className="section">
                <Button onClick={onReset}>Reset to defaults</Button>
            </div>
        </>
    )
}
