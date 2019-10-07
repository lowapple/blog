import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import Profile from '../../atoms/Profile'
import Prompt from '../../atoms/Prompt'
import AuthorBio from '../../atoms/AuthorBio'
import AuthorName from '../../atoms/AuthorName'

const Logo = ({ link, avatar, description }) => {
    return <div className={styles['default']}>
        <AuthorName text={"Lowapple's 블로그"} />
        <AuthorBio text={'기타등등 이것저것 여러가지'} />
    </div>
}

Prompt.propTypes = {
    link: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
}
  
Prompt.defaultProps = {
    link: '/',
    avatar: ``,
    description: ``,
}

export default Logo