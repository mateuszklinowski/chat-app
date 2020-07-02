import React from 'react'
import styles from './button.module.scss'

type ButtonProps = {
    onClick(): void
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { onClick } = props

    return (
        <button className={styles.button} onClick={onClick}>
            {props.children}
        </button>
    )
}
