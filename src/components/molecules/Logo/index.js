import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import AuthorBio from '../../atoms/AuthorBio'
import AuthorName from '../../atoms/AuthorName'

const Logo = ({ link }) => {
    return <div className={styles['default']}>
        <AuthorName text={"Lowapple's 블로그"} link={link}/>
        <AuthorBio text={'기타등등 이것저것 여러가지'} />
    </div>
}

Logo.propTypes = {
    link: PropTypes.string
}
  
Logo.defaultProps = {
    link: '/'
}

export default Logo