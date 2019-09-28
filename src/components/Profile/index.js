import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'

const Profile = ({ image }) => {
    return <img src={image} className={styles['profile']}/>
}

Profile.propTypes = {
    image: PropTypes.string,
}
  
Profile.defaultProps = {
    image: ``,
}
export default Profile