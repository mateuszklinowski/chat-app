import React from 'react'
import styles from './navigation.module.scss'
import { Link } from 'react-router-dom'

export const Navigation: React.FunctionComponent = () => {
    return (
        <section className="section box">
            <Link className={styles.link} to="/">
                Chat
            </Link>
            <Link className={styles.link} to="/settings">
                Settings
            </Link>
        </section>
    )
}
