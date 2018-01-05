import React from 'react'
import Link from 'gatsby-link'
import { GradientText } from 'react-gradient-text'

import functinImage from '../../static/functin.png'
import googleImage from '../../static/didgoogleshutdown.png'
import pilotImage from '../../static/pilot.png'
import ndpImage from '../../static/ndpconnect.jpg'

const Section = ({ children, image, title, style }) => {
  const styled = React.cloneElement(children, {
    style: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  return (
    <div
      style={{
        maxWidth: '900px',
        ...style
      }}
    >
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '5px 15px'
        }}
      >
        { title }
      </h1>
      {image &&
        <div
          style={{
            width: '100%'
          }}
        >
          <img
            src={image} alt="Screenshot"
            style={{
              maxWidth: '500px',
              height: 'auto',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>
      }
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '2.5px 10px',
          display: 'flex',
          justifyContent: 'center',
          margin: '5px 20px'
        }}
      >
        {styled}
      </div>
    </div>
  )
}

const Portfolio = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>My notable contributions to the Internet</h1>
    <Section
      title="final-server"
    >
      <p>
        An experimental Node server framework that takes ideas from ES6+ and React to create a faster, more intuitive way to build APIs. Currently supports ArangoDB and Redux storage.<br /><br/>
        <div><a href="https://github.com/OKNoah/final">Final</a> on Github</div>
      </p>
    </Section>
    <Section
      title="Pilot.io"
      image={pilotImage}
    >
      <p>
        Small business VOIP platform with multiple integrations, including Slack and Intercom. Dashboard created in React, back-end in Node/Express. <br /><br/>
        <a href="https://pilot.io">Pilot.io</a>
      </p>
    </Section>
    <Section
      title="BC NDP Connect"
      image={ndpImage}
    >
      <p>
        Signal-boosting react-native app for iOS, with push notifications, calendar integration, list views, share buttons and more. <br /><br/>
        <a href="https://appsto.re/ca/CbEjjb.i"> App Store</a>
      </p>
    </Section>
    <Section
      image={functinImage}
      title="functin"
    >
      <p>Upcoming developer documentation tool. In React and Node.</p>
    </Section>
    <Section
      title="Slipstream"
      image="https://rainy-code-wp.s3.amazonaws.com/2015/08/Screen-Shot-2015-08-03-at-12.00.26-PM.png"
    >
      <p>Social sharing app. Think Twitter but just for content. Had ad-free Readability-like viewer. Node, Angular and Mongo. Now converted to React and open source. <br/><br/>
        <a href="https://github.com/oknoah/slipstream">Github</a>
      </p>
    </Section>
    <Section
      title="Diffchecker CLI"
    >
      <p>
        An official tool for accessing the popular diffchecker.com app via the command line. Uses node.js.<br/><br/>
        <a href="https://www.diffchecker.com/cli">Diffchecker CLI</a><br/>
        <a href="https://github.com/wali-s/diffchecker-cli">Github</a><br/>
        <a href="https://www.npmjs.com/package/diffchecker">NPM</a>
      </p>
    </Section>
    <Section
      title="Did Google Shut Down"
      image={googleImage}
      style={{ paddingBottom: 25 }}
    >
      <p>Tracks the status of   Google products and services. RainyCode provides code and hosting.<br/><br/>
        <a href="https://didgoogleshutdown.com">DidGoogleShutDown</a>
      </p>
    </Section>
  </div>
)

export default Portfolio
