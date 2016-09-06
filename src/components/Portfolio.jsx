import React, {Component} from 'react'
import {SectionsContainer, Section, Header} from 'react-fullpage'
import SiteHeader from './Header'

import classes from './Portfolio.scss'

import functinImage from '../../static/functin.png'

export default class Portfolio extends Component {
  render () {
    return (
      <div>
        <Header>
          <SiteHeader />
        </Header>
        <SectionsContainer
          sectionClassName="section"
          anchors={['Slipstream', 'Diffchecker_CLI', 'functin']}
          scrollBar={false}
          verticalAlign={false}
          sectionPaddingTop='50px'
          sectionPaddingBottom='50px'
          navigation
          arrowNavigation
        >
          <Section
            color="#414159"
            verticalAlign
          >
            <div className={classes.slipstream}>
              <h1>
                  Slipstream
              </h1>
              <p className={classes.description}>Moonlit social bookmarking app. Think Twitter with only content shares. Split into "streams": read, watch and listen for articles, videos and audio. Node and Angular.</p>
              <div className={classes.imageContainer}>
                <img src="http://rainy-code-wp.s3.amazonaws.com/2015/08/Screen-Shot-2015-08-03-at-12.00.26-PM.png" alt="" />
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
                An official tool for accessing the popular diffchecker.com app via the command line. Uses node.js. <br/>

                <a href="https://www.diffchecker.com/cli">Diffchecker CLI</a>
                <a href="https://github.com/wali-s/diffchecker-cli"></a>
                </p>
              <video className="cli-video" controls>
                <source src="https://www.diffchecker.com/videos/diffchecker-cli.mp4" />
              </video>
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
                <img src={functinImage} alt=""/>
              </div>
            </div>
          </Section>
        </SectionsContainer>
      </div>
    )
  }
}
