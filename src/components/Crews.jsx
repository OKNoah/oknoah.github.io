import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import classes from './Crews.scss'

import CrewsList from './Crews-Crews'
import Members from './Crews-Members'

import {getCrews, addCrew, deleteCrew} from 'redux/modules/crews'
import {getCrewMembers, getMembers, leaveCrew, addMember, deleteMember, joinCrew} from 'redux/modules/members'

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
    getMembers,
    leaveCrew,
    joinCrew,
    addMember,
    deleteMember
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
    user: PropTypes.object,
    joinCrew: PropTypes.func,
    leaveCrew: PropTypes.func,
    addMember: PropTypes.func,
    deleteMember: PropTypes.func
  }

  componentDidMount () {
    this.props.getCrews()
    this.getAssets()
  }

  componentDidUpdate (oldProps) {
    if (oldProps.params.crew !== this.props.params.crew) {
      this.getAssets()
    }
  }

  getAssets () {
    const {crew} = this.props.params
    if (crew) {
      this.props.getCrewMembers(crew)
    } else if (!crew) {
      this.props.getMembers()
    }
  }

  render () {
    const {crews, members} = this.props

    return (
      <div className={classes.wrapper}>
        <CrewsList
          params={this.props.params}
          crews={crews}
        />
        <div className={classes.members}>
          <Members
            members={members}
            params={this.props.params}
            onLeaveCrew={this.props.leaveCrew}
            onJoinCrew={this.props.joinCrew}
            onAddMember={this.props.addMember}
            onDeleteMember={this.props.deleteMember}
          />
        </div>
      </div>
    )
  }
}
