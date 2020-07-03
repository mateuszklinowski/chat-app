import { Middleware } from 'redux'
import { Action } from '../interfaces'
import { RECEIVE_MESSAGE } from '../actions/chatActions'
import { PageTitle } from '../../const'

enum Visibility {
    Visible = 'visible',
    Hidden = 'hidden',
}

const isReceivedMessageAction = (action: Action) =>
    action.type === RECEIVE_MESSAGE

const isTabHidden = (): boolean => {
    return window.document.visibilityState === Visibility.Hidden
}

const toggleTitle = () => {
    window.document.title =
        window.document.title === PageTitle.Normal
            ? PageTitle.Alarm
            : PageTitle.Normal
}

const setNormalTitle = () => (window.document.title = PageTitle.Normal)

export const notificationMiddleware = (): Middleware => {
    let isBlinking = false

    return () => (next) => (action) => {
        if (isReceivedMessageAction(action) && isTabHidden() && !isBlinking) {
            isBlinking = true
            const intervalId = setInterval(toggleTitle, 1000)
            const disableBlink = () => {
                window.removeEventListener('visibilitychange', disableBlink)
                setNormalTitle()
                clearInterval(intervalId)
                isBlinking = false
            }
            window.addEventListener('visibilitychange', disableBlink)
        }

        next(action)
    }
}
