import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"
import PostHeader from '../PostHeader'
import PostTags from "../PostTags"

const PostDescriptionBox = ({description}) => {
    return (
        <p  className={classNames(styles['default'])}>
            <small>
                {description}
            </small>
        </p>
    )
}

export default PostDescriptionBox