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
}

export const Radio: React.FunctionComponent<RadioProps> = (props) => {
    const { label, options, name } = props

    return (
        <>
            <label className={styles.label}>{label}</label>
            <div className="flex">
                {options.map(({ id, value, label }) => {
                    return (
                        <label className={styles.radioInput} key={id}>
                            <input
                                type="radio"
                                id={id}
                                name={name}
                                value={value}
                                key={id}
                            />
                            {label}
                        </label>
                    )
                })}
            </div>
        </>
    )
}
