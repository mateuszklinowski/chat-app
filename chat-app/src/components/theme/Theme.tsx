import React, { useEffect } from 'react'
import { Theme } from '../../const'
import { setAppTheme } from '../../utils/setTheme'
import { connect, MapStateToProps } from 'react-redux'
import { State } from '../../store/interfaces'

type ThemeProps = {
    theme: Theme
}

// Such components can be written in HOC pattern too
const ThemeComponent: React.FunctionComponent<ThemeProps> = (props) => {
    const { theme, children } = props

    useEffect(() => {
        setAppTheme(theme)
    }, [theme])
    return <>{children}</>
}

const mapStateToProps: MapStateToProps<
    ThemeProps,
    Record<never, unknown>,
    State
> = ({ settings }) => ({
    theme: settings.theme,
})

export const ConnectedTheme = connect(mapStateToProps)(ThemeComponent)
