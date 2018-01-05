import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  render () {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div
            style={{
              backgroundColor: 'black',
              margin: '170px 20px',
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
