import React from 'react'
import { FormControl } from './interfaces'
import styles from './controls.module.scss'

export type Option = {
    id: string
    value: string
    label: string
}

interface RadioProps extends FormControl<string> {
    label: string
    options: Option[]
    value: string
}

export const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { label, options, name, onChange, value } = props

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <>
            <label className={styles.label}>{label}</label>
            <div className="flex">
                {options.map(({ id, value: optionValue, label }) => {
                    return (
                        <label className={styles.radioInput} key={id}>
                            <input
                                type="radio"
                                id={id}
                                name={name}
                                value={optionValue}
                                key={id}
                                onChange={handleSelect}
                                checked={optionValue === value}
                            />
                            {label}
                        </label>
                    )
                })}
            </div>
        </>
    )
}
