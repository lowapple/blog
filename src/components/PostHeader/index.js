import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"

const PostHeader = ({title, link}) => {
    return (
        <header className={classNames(styles['default'])}>
            <h2>
                <a href={link}>{title}</a>
            </h2>
        </header>
    )
}

export default PostHeader