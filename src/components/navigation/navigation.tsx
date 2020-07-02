import React from 'react'
import styles from './navigation.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { Path } from '../../const'

const isCurrentRoute = (currentPath: string) => (pathname: string): boolean => {
    return currentPath === pathname
}

export const Navigation: React.FunctionComponent = () => {
    const { pathname } = useLocation()
    const isCurrent = isCurrentRoute(pathname)
    return (
        <section className={`section box ${styles.nav}`}>
            <Link
                className={isCurrent(Path.Home) ? styles.active : ''}
                to={Path.Home}
            >
                Chat
            </Link>
            <Link
                className={isCurrent(Path.Settings) ? styles.active : ''}
                to={Path.Settings}
            >
                Settings
            </Link>
        </section>
    )
}
