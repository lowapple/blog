import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const PageHeader = ({title, description}) => {
    return  <div className={classNames(styles['default'])}>
                <h2>{title}</h2>
                <span>{description}</span>
            </div>
}

export default PageHeader