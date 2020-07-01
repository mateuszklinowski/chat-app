import React from 'react'
import { FormControl } from './interfaces'
import styles from './controls.module.scss'

export type SelectOption = {
    label: string
    value: string
}

interface SelectProps extends FormControl<string> {
    options: SelectOption[]
    label: string
}

export const Select: React.FunctionComponent<SelectProps> = (props) => {
    const { label, name, options } = props
    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <select name={name} id={name} className={styles.select}>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </>
    )
}
