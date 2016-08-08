import React, {Component, PropTypes} from 'react'
import differenceBy from 'lodash/differenceBy'

import classes from './Crews-Members-Member-CrewsMenu.scss'

export default class CrewsMenu extends Component {
  static propTypes = {
    onLeaveCrew: PropTypes.func,
    onJoinCrew: PropTypes.func,
    crews: PropTypes.array,
    members: PropTypes.array,
    membersCrews: PropTypes.array,
    dismiss: PropTypes.func,
    name: PropTypes.string
  }

  addCrewHandler (crew) {
    this.props.onJoinCrew(crew)
  }

  leaveCrewHandler (crew) {
    this.props.onLeaveCrew(crew)
  }

  render () {
    const {crews, membersCrews, name} = this.props

    const unjoinedCrews = differenceBy(crews, membersCrews, 'slug')

    return (
      <div className={classes.crewsMenu}>
        <h2>Add {this.props.name} to crews</h2>
        <div className={classes.crewContainer}>
          {crews && unjoinedCrews.map((crew, index) => (
            <div
              key={index}
              className={classes.addCrew}
              onClick={this.addCrewHandler.bind(this, crew.slug)}
            >
              {'+ ' + crew.name}
            </div>
          ))}
        </div>
        <h2>Remove {this.props.name} from crews</h2>
          <div className={classes.crewContainer}>
            {membersCrews.length !== 0 ?
              membersCrews.map((crew, index) => (
                <div
                  key={index}
                  className={classes.removeCrew}
                  onClick={this.leaveCrewHandler.bind(this, crew.slug)}
                >
                  {'- ' + crew.name}
                </div>
              ))
            :
              <span>{name} is not in any crews.</span>
            }
          </div>
      </div>
    )
  }
}
