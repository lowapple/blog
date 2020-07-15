import React from "react"
import classNames from 'classnames/bind'
import styles from './style.module.scss'
import PropTypes from "prop-types"

const cx = classNames.bind(styles);

const PostTags = ({ tags }) => { 
    // 태그 목록
    const Tags = tags => tags
        .map((tag, i) => <a className={cx('tag')} key={i} target="_blank">{tag}</a>)

    return (
        <div className={cx('tags')}>
            {
                Tags(tags)
            }
        </div>
    )
    // return <p className={classNames(styles['wrapper'])}>{tagsList(tags)}</p>
}

PostTags.propTypes = {
    tags: PropTypes.array
}
  
PostTags.defaultProps = {
    tags: []
}

export default PostTags

