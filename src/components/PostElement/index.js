import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PostDate from '../PostDate'
import PostDescription from "../PostDescription"
import PostHeader from '../PostHeader'

const PostElement = ({post}) => { 
  // Key
  var id = post.node.id
  // 링크  
  var link = `${'/posts/' + post.node.slug}` 
  // 썸네일 이미지 
  const cardThumbnail = () => {
    const visible = post.node.thumbnail != null
    if (visible) {
      return (
        <div class='card-thumbnail'>
          <a href={link}>
            <img className="img-fluid" src={post.node.thumbnail.file.url}></img>
          </a>
        </div>
      )
    } else {
      return null
    }
  }

  return (
  <div key={id} className="col-lg-3 col-md-6 mb-30px card-group">
    <div className="card h-100">
      { cardThumbnail() }
      <div className="card-body">
        <PostHeader link={link} title={post.node.title}/>
        <PostDescription description={post.node.description.description}/>
      </div>
      <div className="card-footer bg-white">
        <div className="wrapfooter">
          <PostDate date={post.node.publishDateISO}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostElement