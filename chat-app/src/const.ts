import config from './../../config.json'

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export enum Lang {
    En = 'en',
    Pl = 'pl',
}

export enum ClockDisplay {
    Hours12 = '12hours',
    Hours24 = '24hours',
}

export enum CtrlEnter {
    On = 'on',
    Off = 'off',
}

export enum Path {
    Home = '/',
    Settings = '/settings',
}

export enum ApiEvents {
    Id = 'id',
    NewMessage = 'newMessage',
}

export enum ApiActions {
    SendMessage = 'message',
}

//export const SOCKET_ENDPOINT = `${config.api}/${config.port}`
export const SOCKET_ENDPOINT = `:3000`
