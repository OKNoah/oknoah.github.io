import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import Background from './Background'

import classes from './Home.scss'

import logo from '../../static/rainycode-logo.png'

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  render () {
    return (
      <div>
        <Background />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div
            className={classes.logoContainer}
            style={{
              backgroundColor: 'black',
              margin: '50px 50px 20px 50px',
              padding: 20
            }}
          >
            <img
              src={logo}
              alt="Rainy Code Logo"
              className={classes.logo}
            />
            <h1>RainyCode</h1>
          </div>
          <div
            style={{
              backgroundColor: 'black',
              margin: '0 50px',
              padding: 20
            }}
          >
            <Link
              style={{ color: 'white' }}
              to="/portfolio"
            >
              <h2 style={{ padding: 0, margin: 0 }}>Portfolio</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
