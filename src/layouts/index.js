import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Background from '../components/Background'

import logo from '../../static/rainycode-logo.png'

import './index.css'

const Header = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  >
    <Link
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: '20px 0px 20px 20px',
        padding: '15px 20px',
        color: 'white'
      }}
    >
      <img
        src={logo}
        alt="Rainy Code Logo"
        style={{ width: 'auto', height: 75, paddingRight: 20, marginBottom: 0 }}
      />
      <h1
        style={{ padding: 0, margin: 0 }}
      >
        RainyCode
      </h1>
    </Link>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rainycode"
      meta={[
        { name: 'description', content: 'Professional portfolio of Rainycode' },
        { name: 'keywords', content: 'portfolio, vancouver, kyoto, web development, software, contractor, studio' },
      ]}
    />
    <Background />
    <Header />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '100vw',
        marginTop: 115
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
