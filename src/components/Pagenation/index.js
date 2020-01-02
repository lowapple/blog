import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const Pagenation = ({ children }) => (
    <div className={classNames(styles['default'])}>
        {children}
    </div>
)

export default Pagenation