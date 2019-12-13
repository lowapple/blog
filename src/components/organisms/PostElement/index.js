import React from "react"
import classNames from 'classnames'
import { Link } from "gatsby"
import { getArchivePostDate } from "../../../utils"
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"
import PostTags from "../PostTags"

const PostElement = ({post}) => { 
  // Key
  var id = post.node.id
  // 링크  
  var link = post.node.fields.slug

  console.log(post)
  return <li><a key={id} className={classNames(styles['default'])} href={link}>
    <PostDate date={post.node.frontmatter.date}/>
    <PostDescription 
        title={post.node.frontmatter.title} 
        description={post.node.frontmatter.description}
        tags={post.node.frontmatter.tags}/>
    
  </a></li>
}

export default PostElement