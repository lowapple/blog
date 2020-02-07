import PropTypes from "prop-types"
import React, { Component } from "react"
import { Location } from "@reach/router"
import styles from './style.module.scss'
import classNames from 'classnames'
import { Link } from "gatsby"
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import icon from '../../images/icon.png'

class Header extends Component {
  constructor(props) {
    super(props)
    //
    this.icon = props.icon
    this.title = props.title
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      let navBar = document.getElementsByClassName("navbar")[0]

      window.addEventListener("scroll",() => {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          navBar.classList.remove('nav-up')
          navBar.classList.add('nav-down')
          this.setState({
            navHeight: 0
          })
        } else {
          navBar.classList.remove('nav-down')
          navBar.classList.add('nav-up')
          this.setState({
            navHeight: -navBar.clientHeight
          })
        }
        prevScrollpos = currentScrollPos;
      })
    }
  }

  state = {
    navHeight: false,
  };


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top mediumnavigation nav-down" style={{ top: this.state.navHeight + 'px' }}>
        <div className="container pr-0">
          <a className="navbar-brand" href="/">
            <img src={this.icon}/>
            {this.title}
          </a>
        </div>
      </nav>
    )
  }
}

export default Header