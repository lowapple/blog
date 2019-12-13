import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const PostTags = ({ tags }) => { 
    // 태그 목록
    const tagsList = tags => 
        tags.map((tag, i) => (
            <span key={i} className={classNames(styles['default'])}>{tag}</span>
        ))

    return <p>{tagsList(tags)}</p>
}
  
export default PostTags