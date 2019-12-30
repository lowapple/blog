import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PropTypes from "prop-types"

const PostTags = ({ tags }) => { 
    // 태그 목록
    const tagsList = tags => 
        tags.map((tag, i) => (
            <span key={i} className={classNames(styles['default'])}>{tag.title}</span>
        ))

    return <p>{tagsList(tags)}</p>
}

PostTags.propTypes = {
    tags: PropTypes.array
}
  
PostTags.defaultProps = {
    tags: []
}

export default PostTags

