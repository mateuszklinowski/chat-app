import { connect, MapStateToProps } from 'react-redux'
import { Navigation, NavigationProps } from './navigation'
import { State } from '../../store/interfaces'

const mapStateToProps: MapStateToProps<
    NavigationProps,
    Record<never, unknown>,
    State
> = ({ chat: { unread } }) => ({
    unreadCount: unread,
})

export const ConnectedNavigation = connect(mapStateToProps, null)(Navigation)
