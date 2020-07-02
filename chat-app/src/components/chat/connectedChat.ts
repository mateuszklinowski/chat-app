import { Chat, ChatProps } from './chat'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { State } from '../../store/interfaces'
import { receiveMessage } from '../../store/actions/chatActions'
import { receiveUserId } from '../../store/actions/metaActions'

type MapStateProps = Pick<ChatProps, 'userId'>
type MapDispatchProps = Omit<ChatProps, 'userId'>

const mapStatToProps: MapStateToProps<
    MapStateProps,
    Record<never, unknown>,
    State
> = (state) => ({
    userId: state.meta.userId,
})

const mapDispatchToProps: MapDispatchToProps<
    MapDispatchProps,
    Record<never, unknown>
> = (dispatch) => ({
    onNewMessage: (message) => {
        dispatch(receiveMessage(message))
    },
    onUserId: (userId) => {
        dispatch(receiveUserId(userId))
    },
})

export const ConnectedChat = connect(mapStatToProps, mapDispatchToProps)(Chat)
