import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import classes from './Crews-Crews-Crew.scss'

export default class Crew extends Component {
  static propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string
  }

  render () {
    const {name, slug} = this.props;

    return (
      <div className={classes.crew}>
        <Link to={'/crews/' + slug}>
          {name}
        </Link>
      </div>
    );
  }
}
