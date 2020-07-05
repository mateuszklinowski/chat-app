import socketIOClient from 'socket.io-client'

type SocketMockOption = {
    on: string
    callback(args: any): void
}
type Emit = (key: string, value: { [key: string]: any }) => void
type On = (key: string, callback: (args: any) => void) => void
type Watcher = (key: string, value: any) => void

type ManualSocket = {
    on: On
    emit: Emit
    addTestLister: On
    resetTest(): void
    addEmitWatcher(watcher: Watcher): void
}

export const initSocketMock = (
    options: SocketMockOption[] = []
): ManualSocket => {
    const appListeners: SocketMockOption[] = []
    let testListeners: SocketMockOption[] = options
    let emitWatchers: Watcher[] = []

    const on: On = (key, callback) => {
        appListeners.push({
            on: key,
            callback,
        })
    }

    const emit: Emit = (eventName, value) => {
        appListeners
            .concat(testListeners)
            .filter((option) => option.on === eventName)
            .forEach((option) => {
                option.callback(value)
            })

        emitWatchers.forEach((watcher) => watcher(eventName, value))
    }

    const addTestLister: On = (key, callback) => {
        testListeners.push({
            on: key,
            callback,
        })
    }

    const addEmitWatcher = (watcher: Watcher) => {
        emitWatchers.push(watcher)
    }

    const resetTest = () => {
        testListeners = []
        emitWatchers = []
    }

    return {
        emit,
        on,
        addTestLister,
        addEmitWatcher,
        resetTest,
    }
}
