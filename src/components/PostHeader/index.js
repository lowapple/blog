import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"

const PostHeader = ({title, link}) => {
    return (
        <h2 className="card-title">
            <a href={link} className="text-dark text-decoration-none">{title}</a>
        </h2>
        /*
        <header className={classNames(styles['default'])}>
            <h2>
                <a href={link}>{title}</a>
            </h2>
        </header>
        */
    )
}

export default PostHeader