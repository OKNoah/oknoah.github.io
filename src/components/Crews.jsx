import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import classes from './Crews.scss'

import CrewsList from './Crews-Crews'
import Members from './Crews-Members'

import {getCrews, addCrew, deleteCrew} from 'redux/modules/crews'
import {getCrewMembers, getMembers} from 'redux/modules/members'

@connect(
  state => ({
    crews: state.crews.data,
    members: state.members.data,
    user: state.auth.user
  }),
  dispatch => bindActionCreators({
    getCrews,
    addCrew,
    deleteCrew,
    getCrewMembers,
    getMembers
  }, dispatch)
)
export default class Crews extends Component {
  static propTypes = {
    params: PropTypes.object,
    crews: PropTypes.array,
    members: PropTypes.array,
    getCrews: PropTypes.func,
    addCrew: PropTypes.func,
    deleteCrew: PropTypes.func,
    getCrewMembers: PropTypes.func,
    getMembers: PropTypes.func,
    user: PropTypes.object
  }

  componentDidMount () {
    this.getAssets()
  }

  componentDidUpdate (oldProps) {
    if (oldProps.params !== this.props.params) {
      this.getAssets()
    }
  }

  getAssets () {
    const {crew} = this.props.params

    this.props.getCrews()
    if (crew) {
      this.props.getCrewMembers(crew)
    } else if (!crew) {
      // this.props.getMembers()
    }
  }

  render () {
    const {crews} = this.props

    return (
      <div className={classes.wrapper}>
        <CrewsList crews={crews} />
      </div>
    )
  }
}
