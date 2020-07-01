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
import { noop } from '../../shared/noop'

type SettingsProps = any // TODO

export const Settings: React.FunctionComponent<SettingsProps> = () => {
    const handleReset = () => {
        // TODO
    }

    const handleUserNameChange = () => {
        // TODO
    }

    return (
        <>
            <div className="box section section--main">
                <div className="row">
                    <Input
                        name="userName"
                        label="User name"
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Interface color"
                        name="interfaceColor"
                        onChange={handleUserNameChange}
                        options={interfaceOptions}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Clock display"
                        name="clockDisplay"
                        onChange={handleUserNameChange}
                        options={clockOptions}
                    />
                </div>
                <div className="row">
                    <Radio
                        label="Send message on CTRL + ENTER"
                        name="ctrlEnter"
                        onChange={handleUserNameChange}
                        options={ctrlEnterOptions}
                    />
                </div>
                <div className="row">
                    <Select
                        label="Language"
                        options={langOptions}
                        name="lang"
                        onChange={noop}
                    />
                </div>
            </div>
            <div className="section">
                <Button onClick={handleReset}>Reset to defaults</Button>
            </div>
        </>
    )
}
