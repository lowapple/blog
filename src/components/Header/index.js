import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import styles from './style.module.scss'
import classNames from 'classnames'
import { Link } from "gatsby"

const Header = ({ title }) => (
  <header className={styles['default']}>
    <Link to='/'>{title}</Link>
  </header>
)

export default Header