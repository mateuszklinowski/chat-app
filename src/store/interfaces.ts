export type Message = {
    timestamp: number
    senderId: string
    content: string
    id: string
}

export type ChatState = {
    messages: Message[]
}

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}
export enum Lang {
    En = 'en',
    Pl = 'pl',
}

export type MetaState = {
    name: string
    theme: Theme
    ctrlEnter: boolean
    lang: Lang
}

export type State = {
    chat: ChatState
    meta: MetaState
}

export type Action<P = unknown> = {
    type: string
    payload?: P
}
