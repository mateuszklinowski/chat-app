import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Settings } from './settings'
import { ClockDisplay, CtrlEnter, Lang, Theme } from '../../const'

const getDefaultProps = () => ({
    onReset: jest.fn(),
    onRender: jest.fn(),
    onSettingsChange: jest.fn(),
    name: 'test name',
    theme: Theme.Light,
    clockDisplay: ClockDisplay.Hours12,
    ctrlEnter: CtrlEnter.On,
    lang: Lang.En,
})

// Example of pure component test (without Redux store interactions)
describe('Settings component', () => {
    it('Trigger settings change on user interaction', () => {
        const baseProps = getDefaultProps()

        const { container } = render(<Settings {...baseProps} />)

        const themeRadio = container.querySelector(
            `[value="${Theme.Dark}"]`
        ) as HTMLInputElement

        expect(baseProps.onSettingsChange).not.toHaveBeenCalled()
        fireEvent.click(themeRadio)
        expect(baseProps.onSettingsChange).toHaveBeenCalledWith(
            'theme',
            Theme.Dark
        )
    })

    it('Use provided settings values as selected', () => {
        const baseProps = getDefaultProps()

        const { container } = render(<Settings {...baseProps} />)

        const nameInput = container.querySelector(
            '#userName'
        ) as HTMLInputElement
        expect(nameInput.value).toEqual(baseProps.name)

        const langSelect = container.querySelector('#lang') as HTMLSelectElement
        expect(langSelect.value).toEqual(baseProps.lang)

        const themeRadio = container.querySelector(
            `[value="${baseProps.theme}"]`
        ) as HTMLInputElement
        expect(themeRadio.checked).toBeTruthy()
    })
})
