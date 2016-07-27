import React, {Component, PropTypes} from 'react'

import Member from './Crews-Members-Member'

import classes from './Crews-Members.scss'

export default class Members extends Component {
  static propTypes = {
    members: PropTypes.array
  }

  render () {
    const {members} = this.props

    return (
      <div className={classes.members}>
      { members && members.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          description={member.description}
        />
      ))}
      </div>
    )
  }
}
