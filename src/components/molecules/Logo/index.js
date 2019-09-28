import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import Profile from '../../atoms/Profile'
import Prompt from '../../atoms/Prompt'

const Logo = ({ link, avatar, description }) => {
    return <div className={styles['default']}>
        <Link to={link}>
            <Profile image={avatar} />
        </Link>
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