import React from "react"
import PostDate from '../PostDate'
import PostTags from '../PostTags'
import PostDescription from "../PostDescription"
import PostHeader from '../PostHeader'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles);

const PostElement = ({post}) => { 
  // Key
  var id = post.node.id
  const title = post.node.title
  // 링크  
  var link = `${'/posts/' + post.node.slug}` 
  // 썸네일 이미지 
  const cardThumbnail = () => {
    const visible = post.node.thumbnail != null
    if (visible) {
      return (
        <div className='card-thumbnail'>
          <a href={link}>
            <img className="img-fluid" src={post.node.thumbnail.file.url}></img>
          </a>
        </div>
      )
    } else {
      return null
    }
  }
  console.log(post.node)
  return (

    <li>
      <h3 className={cx('title')}><a href={link}>{title}</a></h3>
      {/* <PostTags tags={post.node.tags}/> */}
      <PostDate date={post.node.publishDateISO}/>
      <hr id="line"/>
      <p className={cx('content')}>{post.node.description.description}</p>
      { cardThumbnail() }
    </li>
  )
}

export default PostElement