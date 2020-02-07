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
  //<article key={id} className={classNames(styles['default'])}>
  <div key={id} className="col-lg-3 col-md-6 mb-30px card-group">
    <div className="card h-100">
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