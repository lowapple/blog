import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'

const AuthorName = ({text}) => {
    return <div className={styles['default']}>
        {text}
    </div>
}

export default AuthorName