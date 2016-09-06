import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import { browserHistory } from 'react-router'

import classes from './Home.scss'

import logo from '../../static/rainycode-logo.png'

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  heroCTAClickHander () {
    browserHistory.push('/portfolio')
  }

  render () {
    return (
      <div className={classes.heroWrapper}>
        <div className={classes.mainHero}>
          <div className={classes.logoContainer}>
            <img
              src={logo}
              alt="Rainy Code Logo"
              className={classes.logo}
            />
            <h1>RainyCode</h1>
          </div>
          <h2>No start ups, just disruption.</h2>
          <Link
            to="/portfolio"
          >
            <button
              className={classes.heroCTA}
            >
              See the portfolio
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
