import React, { ChangeEvent } from 'react'
import styles from './controls.module.scss'
import { FormControl } from './interfaces'

interface InputProps extends FormControl<string> {
    placeholder?: string
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { onChange, placeholder = '', label = '', name } = props

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
            />
        </>
    )
}
