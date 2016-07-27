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
            <h1>Welcome</h1>
          </div>
        </div>
        <div className={classes.content}>

        </div>
      </div>
    );
  }
}
