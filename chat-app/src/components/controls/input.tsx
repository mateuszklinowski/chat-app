import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './controls.module.scss'
import { FormControl } from './interfaces'
import { noop } from '../../utils/noop'

interface InputProps extends FormControl<string> {
    placeholder?: string
    value?: string
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { onChange, placeholder = '', label = '', name, value } = props
    const [_value, setValue] = useState<string>(value)

    useEffect(() => {
        value !== _value ? setValue(value) : noop()
    }, [value])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        onChange(value)
    }

    return (
        <>
            {label && (
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                className={styles.input}
                value={_value}
            />
        </>
    )
}
