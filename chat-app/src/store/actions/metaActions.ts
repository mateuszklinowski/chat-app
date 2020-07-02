import { Action } from '../interfaces'

export const RECEIVE_USER_ID = 'type/RECEIVE_USER_ID'

export const receiveUserId = (userId: string): Action<string> => ({
    type: RECEIVE_USER_ID,
    payload: userId,
})
