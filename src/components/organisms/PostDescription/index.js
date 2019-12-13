import React from "react"
import classNames from 'classnames'
import { Link } from "gatsby"
import { getArchivePostDate } from "../../../utils"
import styles from './style.module.scss'
import PostTags from '../PostTags'

const PostDescription = ({ title, description, tags }) => { 
    return <div className={classNames(styles['default'])}>
        <h3>{title}</h3>
        <p>{description}</p>
        <PostTags tags={tags}/>
    </div>
}
  
export default PostDescription