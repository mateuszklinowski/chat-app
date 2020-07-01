import { connect } from 'react-redux'
import { State } from '../../store/interfaces'
import { Messages, MessagesProps } from './messages'

const mapStateToProps = (state: State): MessagesProps => {
    return {
        messages: state.chat.messages,
    }
}

export const ConnectedMessages = connect(mapStateToProps)(Messages)
