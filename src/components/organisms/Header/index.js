import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import Logo from '../../molecules/Logo'
import styles from './style.module.scss'
import classNames from 'classnames'

const Header = ({ data }) => (
  <header className={styles['default']}>
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <Logo link={'/about/'} />
        ) : (
          <Logo link={'/'} />
        )
      }}
    </Location>
  </header>
)

export default Header