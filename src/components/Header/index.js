import PropTypes from "prop-types"
import React, { Component } from "react"
import { Location } from "@reach/router"
import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { Link } from "gatsby"
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import icon from '../../images/icon.png'

const cx = classNames.bind(styles);

class Header extends Component {
  constructor(props) {
    super(props)
    this.metadata = props.metadata
  }

  componentDidMount() {
    this.locationPath = window.location.pathname
  }

  render() {
    return (
      <header className={cx('header')}>
        <div className={cx('container')}>
          <div className={cx('nav')}>
            {
              this.metadata.pages.map((page, i) => {
                if (this.locationPath != page.href) {
                  return <li key={i}><a href={page.href}>{page.title}</a></li>  
                } else {
                  return <span key={i}><li><a href={page.href}>{page.title}</a></li></span>
                }
              })
            }
          </div>
        </div>
      </header>
    )
  }
}

export default Header