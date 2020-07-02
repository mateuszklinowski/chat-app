import React from 'react'
import { Lang } from '../../const'
import { connect, MapStateToProps } from 'react-redux'
import { State } from '../../store/interfaces'

export const IntlContext = React.createContext<Lang>(Lang.En)

type IntlProps = {
    lang: Lang
}

// This would be React-intl or some other intl lib in normal project
// just use recruitment task to have some fun

const IntlComponent: React.FunctionComponent<IntlProps> = ({
    children,
    lang,
}) => {
    return <IntlContext.Provider value={lang}>{children}</IntlContext.Provider>
}

const mapStateToProps: MapStateToProps<
    IntlProps,
    Record<never, unknown>,
    State
> = (state) => ({
    lang: state.settings.lang,
})

export const Intl = connect(mapStateToProps, null)(IntlComponent)
