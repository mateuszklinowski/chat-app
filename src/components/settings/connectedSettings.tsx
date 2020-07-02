import { connect, MapStateToProps } from 'react-redux'
import { Settings, SettingsProps } from './settings'
import {
    changeSettings,
    resetSettings,
} from '../../store/actions/settingsActions'

import { Dispatch } from 'redux'
import { SettingsState, State } from '../../store/interfaces'

type StateToProps = Pick<SettingsProps, keyof SettingsState>

const mapStateToProps: MapStateToProps<
    StateToProps,
    Record<never, unknown>,
    State
> = ({ settings }): StateToProps => ({
    name: settings.name,
    theme: settings.theme,
    clockDisplay: settings.clockDisplay,
    ctrlEnter: settings.ctrlEnter,
    lang: settings.lang,
})

type DispatchToProps = Pick<SettingsProps, 'onReset' | 'onSettingsChange'>

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
    onSettingsChange: (key, value) => dispatch(changeSettings(key, value)),
    onReset: () => dispatch(resetSettings()),
})

export const ConnectedSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
