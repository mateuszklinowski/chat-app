import { connect } from 'react-redux'
import { CreateMessage, MessageInputProps } from './createMessage'
import { noop } from '../../shared/noop'

const mapDispatchToProps = (): MessageInputProps => {
    return {
        onSubmit(message: string) {
            noop(message) // TODO
        },
    }
}

export const ConnectedCreateMessage = connect(
    null,
    mapDispatchToProps
)(CreateMessage)
