import { useContext } from 'react'
import { IntlContext } from '../../components/intl/Intl'
import { Lang } from '../../const'
import { translations } from '../../translations'

export type Translate = (key: string) => string | null

interface Intl {
    translate: Translate
}

export const useIntl = (): Intl => {
    const lang = useContext<Lang>(IntlContext)

    const translate: Translate = (key) => {
        const translation = translations[lang][key]

        return translation || null
    }

    return {
        translate,
    }
}
