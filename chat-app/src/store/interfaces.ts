import { ClockDisplay, CtrlEnter, Lang, Theme } from '../const'

export type Message = {
    timestamp: number
    senderId: string
    senderName: string
    content: string
    id: string
}

export type ChatState = {
    messages: Message[]
}

export type SettingsState = {
    name: string
    theme: Theme
    clockDisplay: ClockDisplay
    ctrlEnter: CtrlEnter
    lang: Lang
}

export interface MetaState {
    userId: string | undefined
    isLoading: boolean
}

export type State = {
    chat: ChatState
    settings: SettingsState
    meta: MetaState
}

export interface Action<P = unknown> {
    type: string
    payload?: P
}
