import { Option } from '../components/controls/radio'
import { Translate } from './useIntl/useIntl.hook'

export const translateOption = (translate: Translate) => (
    option: Option
): Option => {
    return {
        ...option,
        label: translate(option.label),
    }
}
