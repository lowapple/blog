import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const Divider = () => {
    return (
        <hr className={classNames(styles['default'])}/>
    )
}

export default Divider