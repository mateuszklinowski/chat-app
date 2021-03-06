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
    value: string
}

export const Select: React.FunctionComponent<SelectProps> = (props) => {
    const { label, name, options, onChange, value } = props

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <select
                name={name}
                id={name}
                className={styles.select}
                onChange={handleSelect}
                value={value}
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </>
    )
}
