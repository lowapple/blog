import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const PostInfo = ({ date }) => { 
    return (
    <time className={classNames(styles['default'])}>{date}</time>
    )
}

export default PostInfo

