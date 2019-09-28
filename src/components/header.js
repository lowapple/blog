import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import Logo from './molecules/Logo'

const Header = ({ avatar }) => (
  <header className="logo">
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <Logo link={'/about/'} avatar={avatar} description={"About"} />
        ) : (
          <Logo link={'/'} avatar={avatar} description={'홈으로 돌아가기'} />
        )
      }}
    </Location>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
