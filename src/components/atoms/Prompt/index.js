import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './style.module.scss'
import classNames from 'classnames'

const Prompt = ({ className, description }) => {
    return <span className={classNames(className, styles['default'])}>{description}</span>
}

Prompt.propTypes = {
    description: PropTypes.string,
}
  
Prompt.defaultProps = {
    description: ``,
}

export default Prompt
  