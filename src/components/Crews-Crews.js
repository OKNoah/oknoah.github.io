import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {addCrew, deleteCrew} from 'redux/modules/crews'

import classes from './Crews-Crews.scss'

@connect(
  state => ({
    crews: state.crews.data,
    user: state.auth.data
  }),
  dispatch => ({
    addCrew,
    deleteCrew
  }, dispatch)
)
export default class CrewsList extends Component {
  static propTypes = {
    crews: PropTypes.array,
    user: PropTypes.object
  }

  render () {
    const {crews, user} = this.props

    return (
      <div className={classes.crews}>
        { crews.map((crew, index) => {
          return (
            <div key={index}>
              <Link to={'/crews/' + crew.slug}>
                {crew.name}
                {user &&
                  <div>Hello!</div>
                }
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}
