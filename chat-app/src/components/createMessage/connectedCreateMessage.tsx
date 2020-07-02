import {
    connect,
    MapDispatchToProps,
    MapStateToProps,
    MergeProps,
} from 'react-redux'
import { CreateMessage, CreateMessageProps } from './createMessage'
import { NewMessage, sendMessage } from '../../store/actions/chatActions'
import { State } from '../../store/interfaces'
import { CtrlEnter } from '../../const'

type StateProps = {
    name: string
    userId: string
    ctrlEnter: CtrlEnter
}

const mapStateToProps: MapStateToProps<
    StateProps,
    Record<never, unknown>,
    State
> = ({ meta, settings }) => ({
    name: settings.name,
    userId: meta.userId,
    ctrlEnter: settings.ctrlEnter,
})

type DispatchProps = {
    sendMessage(message: NewMessage): void
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, null> = (
    dispatch
) => ({
    sendMessage: (message) => dispatch(sendMessage(message)),
})

const mergeProps: MergeProps<
    StateProps,
    DispatchProps,
    Record<never, unknown>,
    CreateMessageProps
> = ({ name, userId, ctrlEnter }, { sendMessage }): CreateMessageProps => ({
    ctrlEnter: ctrlEnter,
    onSubmit: (message: string) => {
        sendMessage({
            senderName: name,
            senderId: userId,
            content: message,
        })
    },
})
export const ConnectedCreateMessage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CreateMessage)
