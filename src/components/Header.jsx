import React, {Component} from 'react'
import {Link} from 'react-router'

import classes from './Header.scss'

import logo from '../../static/rainycode-logo.png'

export default class Header extends Component {
  render () {
    return (
      <div className={classes.headerWrapper}>
        <div className={classes.header}>
          <div className={classes.logoContainer}>
            <img
              src={logo}
              alt="Rainy Code Logo"
              className={classes.logo}
            />
            <Link to="/">
              RainyCode
            </Link>
          </div>
          <div className={classes.navigation}>
            <Link
              className={classes.navItem}
              to="/"
            >
              Home
            </Link>
            <Link
              className={classes.navItem}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
