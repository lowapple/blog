import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"
import PostHeader from '../PostHeader'
import PostTags from "../PostTags"

const PostElement = ({post}) => { 
  // Key
  var id = post.node.id
  // 링크  
  var link = `${'/posts/' + post.node.slug}` 

  console.log(post)
  return (
  <article key={id} className={classNames(styles['default'])}>
    <PostHeader link={link} title={post.node.title}/>
    <PostDescription description={post.node.description.description}/>
  </article>
  )
}

export default PostElement