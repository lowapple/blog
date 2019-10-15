import React from "react"
import classNames from 'classnames'
import { Link } from "gatsby"
import { getArchivePostDate } from "../../../utils"
import styles from './style.module.scss'

const ArchiveItem = ({post}) => {
    return <div key={post.node.id} className={classNames(styles['default'])}>
        <span className={styles['.archive-post-date']}>
          {getArchivePostDate(post)}
        </span>
        <span className={classNames(styles['archive-post-title'])}>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </span>
    </div>
}

export default ArchiveItem