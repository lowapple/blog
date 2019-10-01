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
        <Link to={link}>
            <Profile image={avatar} />
        </Link>
        <div className={styles['info']}>
            <AuthorName text={"Lowapples'Blog"} />
            <AuthorBio text={'기술 블로그?'} />
        </div>
        <Prompt className={styles['prompt']} description={description}/>
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