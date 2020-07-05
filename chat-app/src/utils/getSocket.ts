import socketIOClient from 'socket.io-client'
import { SOCKET_ENDPOINT } from '../const'

export const getSocketIOClient = (): SocketIOClient.Socket => {
    return socketIOClient(SOCKET_ENDPOINT)
}
