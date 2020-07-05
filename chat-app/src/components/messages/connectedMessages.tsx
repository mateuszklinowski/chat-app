import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { State } from '../../store/interfaces'
import { Messages, MessagesProps } from './messages'
import { readMessages } from '../../store/actions/chatActions'

const mapStateToProps: MapStateToProps<
    Omit<MessagesProps, 'onMount'>,
    Record<never, unknown>,
    State
> = ({ chat, settings, meta }) => {
    return {
        userId: meta.userId,
        messages: chat.messages,
        clock: settings.clockDisplay,
    }
}

const mapDispatchToProps: MapDispatchToProps<
    Pick<MessagesProps, 'onMount'>,
    Record<never, unknown>
> = (dispatch) => ({
    onMount: () => dispatch(readMessages()),
})

export const ConnectedMessages = connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages)
