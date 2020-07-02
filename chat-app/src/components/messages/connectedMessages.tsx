import { connect, MapStateToProps } from 'react-redux'
import { State } from '../../store/interfaces'
import { Messages, MessagesProps } from './messages'

const mapStateToProps: MapStateToProps<
    MessagesProps,
    Record<never, unknown>,
    State
> = ({ chat, settings, meta }): MessagesProps => {
    return {
        userId: meta.userId,
        messages: chat.messages,
        clock: settings.clockDisplay,
    }
}

export const ConnectedMessages = connect(mapStateToProps)(Messages)
