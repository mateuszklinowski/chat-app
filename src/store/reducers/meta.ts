import { Reducer } from 'redux'
import { Action, Lang, MetaState, State, Theme } from '../interfaces'

const fakeServiceToGenerateNames = (): string => {
    const names = [
        'Lui the Avid',
        'Rob the Dandy',
        'Awesome Anna',
        'Delightful Stefan',
        'Colossal Magie',
    ]

    return names[Math.floor(Math.random() * names.length)]
}

export const initialState: MetaState = {
    name: fakeServiceToGenerateNames(),
    theme: Theme.Light,
    ctrlEnter: false,
    lang: Lang.En,
}

export const metaReducer: Reducer<MetaState, Action> = (state, action) => {
    if (!state) {
        return initialState
    }

    switch (action.type) {
        default:
            return state
    }
}
