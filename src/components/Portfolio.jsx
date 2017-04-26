import React, {Component} from 'react'
import {SectionsContainer, Section, Header} from 'react-fullpage'
import SiteHeader from './Header'

import classes from './Portfolio.scss'

import functinImage from '../../static/functin.png'
import googleImage from '../../static/didgoogleshutdown.png'
import pilotImage from '../../static/pilot.png'
import ndpImage from '../../static/ndpconnect.jpg'

export default class Portfolio extends Component {
  render () {
    return (
      <div>
        <Header>
          <SiteHeader />
        </Header>
        <SectionsContainer
          sectionClassName="section"
          anchors={['pilot', 'ndpconnect', 'functin', 'slipstream', 'diffchecker', 'didgoogleshutdown']}
          scrollBar={false}
          verticalAlign={false}
          sectionPaddingTop='50px'
          sectionPaddingBottom='50px'
          navigation
          arrowNavigation
        >
          <Section
            color="#FBFBFB"
            verticalAlign
          >
            <div className={classes.pilot}>
              <h1>
                Pilot.io
              </h1>
              <p className={classes.description}>
                Small business VOIP platform with multiple integrations, including Slack and Intercom. Dashboard created in React, back-end in Node/Express. <br />
                <a href="https://pilot.io">Pilot.io</a><br />
              </p>
              <div className={classes.imageContainer}>
                <img src={pilotImage} alt="Screenshot of Pilot.io" />
              </div>
            </div>
          </Section>
          <Section
            color="#FF9000"
            verticalAlign
          >
            <div className={classes.ndpconnect}>
              <h1>
                BC NDP Connect
              </h1>
              <p className={classes.description}>
                Signal-boosting react-native app for iOS, with push notifications, calendar integration, list views, share buttons and more. <br />
                <a href="https://appsto.re/ca/CbEjjb.i"> App Store</a><br />
              </p>
              <div className={classes.imageContainer}>
                <img src={ndpImage} alt="Screenshot of BC NDP Connect on the App Store" />
              </div>
            </div>
          </Section>
          <Section
            color="#F9F9F9"
            verticalAlign
          >
            <div className={classes.functin}>
              <h1>functin</h1>
              <p className={classes.description}>Upcoming developer documentation tool. In React and Node.</p>
              <div className={classes.imageContainer}>
                <img src={functinImage} alt="" />
              </div>
            </div>
          </Section>
          <Section
            color="#414159"
            verticalAlign
          >
            <div className={classes.slipstream}>
              <h1>
                Slipstream
              </h1>
              <p className={classes.description}>Moonlit social bookmarking app. Think Twitter with only content shares. Split into "streams": read, watch and listen for articles, videos and audio. Node, Angular and Mongo. Now open source and undergoing refactoring in React. <br/>
                <a href="https://github.com/oknoah/slipstream">Github</a><br/>
              </p>
              <div className={classes.imageContainer}>
                <img src="https://rainy-code-wp.s3.amazonaws.com/2015/08/Screen-Shot-2015-08-03-at-12.00.26-PM.png" alt="" />
              </div>
            </div>
          </Section>
          <Section
            color="black"
            verticalAlign
          >
            <div className={classes.diffchecker}>
              <h1>
                Diffchecker CLI
              </h1>
              <p
                className={classes.description}
              >
                An official tool for accessing the popular diffchecker.com app via the command line. Uses node.js.<br/>

                <a href="https://www.diffchecker.com/cli">Diffchecker CLI</a><br/>
                <a href="https://github.com/wali-s/diffchecker-cli">Github</a><br/>
                <a href="https://www.npmjs.com/package/diffchecker">NPM</a>
              </p>
              <video className="cli-video" controls>
                <source src="https://www.diffchecker.com/videos/diffchecker-cli.mp4" />
              </video>
            </div>
          </Section>
          <Section
            color="white"
            verticalAlign
          >
            <div className={classes.google}>
              <h1>Did Google Shut Down</h1>
              <p className={classes.description}>Tracks the status of   Google products and services. RainyCode provides code and hosting.<br/>
                <a href="https://didgoogleshutdown.com">DidGoogleShutDown</a>
              </p>
              <div className={classes.imageContainer}>
                <img src={googleImage} alt=""/>
              </div>
            </div>
          </Section>
        </SectionsContainer>
      </div>
    )
  }
}
