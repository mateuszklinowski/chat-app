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
import { useIntl } from '../../utils/useIntl/useIntl.hook'
import { translateOption } from '../../utils/translateOption'

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
    const { translate } = useIntl()

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
                        label={translate('SETTINGS.USER')}
                        onChange={handleSettingsChange('name')} // TODO debounce or trigger on blur or exit
                        value={settings.name}
                    />
                </div>
                <div className="row">
                    <Radio
                        label={translate('SETTINGS.THEME')}
                        name="interfaceColor"
                        onChange={handleSettingsChange('theme')}
                        options={interfaceOptions.map(
                            translateOption(translate)
                        )}
                        value={settings.theme}
                    />
                </div>
                <div className="row">
                    <Radio
                        label={translate('SETTINGS.CLOCK')}
                        name="clockDisplay"
                        onChange={handleSettingsChange('clockDisplay')}
                        options={clockOptions.map(translateOption(translate))}
                        value={settings.clockDisplay}
                    />
                </div>
                <div className="row">
                    <Radio
                        label={translate('SETTINGS.CTRL_ENTER')}
                        name="ctrlEnter"
                        onChange={handleSettingsChange('ctrlEnter')}
                        options={ctrlEnterOptions}
                        value={settings.ctrlEnter}
                    />
                </div>
                <div className="row">
                    <Select
                        label={translate('SETTINGS.LANGUAGE')}
                        options={langOptions}
                        name="lang"
                        value={settings.lang}
                        onChange={handleSettingsChange('lang')}
                    />
                </div>
            </div>
            <div className="section">
                <Button onClick={onReset}>{translate('SETTINGS.RESET')}</Button>
            </div>
        </>
    )
}
