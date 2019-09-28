import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import classNames from 'classnames'

const Profile = ({ image }) => {
    return <img src={image} className={classNames(styles['default'])}/>
}

Profile.propTypes = {
    image: PropTypes.string,
}
  
Profile.defaultProps = {
    image: ``,
}
export default Profile