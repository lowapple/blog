import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import ALink from '../../atoms/ALink'

const Logo = ({ link }) => {
    return <div className={styles['default']}>
        <ALink text={"Lowapple Tech"} link={link}/>
    </div>
}

Logo.propTypes = {
    link: PropTypes.string
}
  
Logo.defaultProps = {
    link: '/'
}

export default Logo