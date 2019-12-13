import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import Logo from '../../molecules/Logo'
import styles from './style.module.scss'
import classNames from 'classnames'

const Header = ({ data }) => (
  <header className={styles['default']}>
    <Logo link={'/'} />
  </header>
)

export default Header