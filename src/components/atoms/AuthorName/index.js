import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'

const AuthorName = ({text, link}) => {
    return <div className={styles['default']}>
        <Link to={link}>{text}</Link>
    </div>
}

export default AuthorName