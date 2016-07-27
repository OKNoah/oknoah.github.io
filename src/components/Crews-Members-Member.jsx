import React, {Component, PropTypes} from 'react'

import classes from './Crews-Members-Member.scss'

export default class Member extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
  }

  render () {
    const {name, description} = this.props

    return (
      <div className={classes.member}>
        {name}
        {description}
      </div>
    )
  }
}
