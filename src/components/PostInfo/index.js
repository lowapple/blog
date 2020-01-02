import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'
import PropTypes from "prop-types"

const PostInfo = ({ date, readTime }) => { 
    return (
    <div className={classNames(styles['default'])}>
        {date} &middot; {readTime} min to read
    </div>
    )
}

export default PostInfo

