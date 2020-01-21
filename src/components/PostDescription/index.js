import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostTags from '../PostTags'

const PostDescription = ({  description }) => { 
    return (
        <section className={classNames(styles['default'])}>
            <p>{description}</p>
        </section>
    )
}
  
export default PostDescription