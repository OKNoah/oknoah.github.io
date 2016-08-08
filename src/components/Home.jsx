import React, {Component, PropTypes} from 'react'

import classes from './Home.scss'

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  render () {
    return (
      <div>
        <div className={classes.heroWrapper}>
          <div className={classes.mainHero}>
            <h1>Welcome to SPYA</h1>
            <h2>The Screen Production Yukon Association (SPYA), formerly known as the Northern Film and Video Industry Association (NFVIA), represents the screen-based media production industry and its workers in Yukon</h2>
          </div>
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <p>We work closely with producers and production companies from around the world and we endeavour to meet the needs of productions taking place here by providing crew, equipment and advice on services all year around.</p>
            <p>SPYA advocates on behalf of its members and provides a broad range of professional development opportunities for producers and all above and below-the-line crew members.</p>
            <p>In 2014 SPYA completed a Strategic Plan for the coming 5-years of developing the association and fostering the Yukon industry.</p>
            <p>If you are looking for more information on membership, grip and electrics equipment rental, crew members, productions services, please contact us. We will be delighted to assist you in any way that we can.</p>
          </div>
        </div>
      </div>
    );
  }
}
