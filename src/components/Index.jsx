import React, {Component} from 'react'
import PropTypes from 'prop-types'

import classes from './Header.scss'

export default class Index extends Component {
  static propTypes = {
    params: PropTypes.object,
    children: PropTypes.element
  }

  render () {
    const {children, params} = this.props

    return (
      <div className={classes.wrapper}>
        {children && React.cloneElement(children, {
          params
        })}
      </div>
    );
  }
}
