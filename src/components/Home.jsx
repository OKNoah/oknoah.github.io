import React, {Component, PropTypes} from 'react'
import { browserHistory } from 'react-router';

import classes from './Home.scss'

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  heroCTAClickHander () {
    browserHistory.push('/crews')
  }

  render () {
    return (
      <div>
        <div className={classes.heroWrapper}>
          <div className={classes.mainHero}>
            <h1>RainyCode</h1>
            <button
              onClick={::this.heroCTAClickHander}
              className={classes.heroCTA}
            >
              <i className="fa folder-open" />
              {' See the portfolio'}
            </button>
          </div>
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <p>Kill the rich now.</p>
          </div>
        </div>
      </div>
    );
  }
}
