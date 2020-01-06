import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"

const PostElement = ({post}) => { 
  // Key
  var id = post.node.id
  // 링크  
  var link = `${'/posts/' + post.node.slug}` 

  console.log(post)
  return <li><a key={id} className={classNames(styles['default'])} href={link}>
    <PostDate date={post.node.publishDateISO}/>
    <PostDescription 
        title={post.node.title} 
        description={post.node.description.description}
        tags={post.node.tags}/>
    
  </a></li>
}

export default PostElement