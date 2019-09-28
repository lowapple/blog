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
          <Logo link={'/about/'} avatar={data.site.siteMetadata.avatar} description={"About"} />
        ) : (
          <Logo link={'/'} avatar={data.site.siteMetadata.avatar} description={'홈으로 돌아가기'} />
        )
      }}
    </Location>
  </header>
)

export default Header
