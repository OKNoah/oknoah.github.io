import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Member from './Crews-Members-Member'
import Window from './Window'
import NewMember from './Crews-Members-NewMember'

import classes from './Crews-Members.scss'

@connect(state => ({
  user: state.auth.data
}))
export default class Members extends Component {
  static propTypes = {
    members: PropTypes.array,
    onLeaveCrew: PropTypes.func,
    onDeleteMember: PropTypes.func,
    onAddMember: PropTypes.func,
    onJoinCrew: PropTypes.func,
    params: PropTypes.object,
    user: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      showMemberModal: false
    }
  }

  memberModalHandler () {
    this.setState({showMemberModal: !this.state.showMemberModal})
  }

  addMemberHandler (fields) {
    this.props.onAddMember(fields)
    .then(() => {
      this.memberModalHandler()
    })
  }

  render () {
    const {members, params} = this.props
    const {showMemberModal} = this.state

    return (
      <div className={classes.members}>
        { members && members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            description={member.description}
            slug={member.slug}
            params={params}
            onJoinCrew={this.props.onJoinCrew}
            onLeaveCrew={this.props.onLeaveCrew}
            onDeleteMember={this.props.onDeleteMember}
          />
        ))}
        {(!params.crew && this.props.user) &&
          <div
            className={classes.addContainer}
          >
            <button
              onClick={::this.memberModalHandler}
              className={classes.newMemberButton}
            >
              <span className={classes.plus}>+</span>
              <span>Create new member</span>
            </button>
          </div>
        }
        {showMemberModal &&
          <Window
            dismiss={::this.memberModalHandler}
          >
            <NewMember
              onSubmit={::this.addMemberHandler}
            />
          </Window>
        }
      </div>
    )
  }
}
