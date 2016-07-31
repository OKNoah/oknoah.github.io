import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Window from './Window'
import Add from './Crews-Crews-Add'
import Crew from './Crews-Crews-Crew'

import {addCrew, deleteCrew} from 'redux/modules/crews'

import classes from './Crews-Crews.scss'
import modalClasses from './Crews-Crews-Add.scss'

@connect(
  state => ({
    crews: state.crews.data,
    user: state.auth.data
  }),
  dispatch => bindActionCreators({
    addCrew,
    deleteCrew
  }, dispatch)
)
export default class CrewsList extends Component {
  static propTypes = {
    crews: PropTypes.array,
    user: PropTypes.object,
    addCrew: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      showAddModal: false
    }
  }

  addModalHandler () {
    this.setState({showAddModal: !this.state.showAddModal})
  }

  addCrewHandler (fields) {
    this.props.addCrew(fields)
    .then(() => {
      this.addModalHandler()
    })
  }

  render () {
    const {crews, user} = this.props

    return (
      <div className={classes.crews}>
        <Crew
          name="All"
          slug=""
        />
        { crews.map((crew, index) => {
          return (
            <Crew
              key={index}
              name={crew.name}
              slug={crew.slug}
            />
          )
        })}
        {user &&
          <div
            onClick={::this.addModalHandler}
          >
            ➕
          </div>
        }
        {this.state.showAddModal &&
          <Window
            dismiss={::this.addModalHandler}
            className={modalClasses.crewModal}
            overlayClassName={modalClasses.crewModalOverlay}
          >
            <Add
              onSubmit={this.props.addCrew}
            />
          </Window>
        }
      </div>
    )
  }
}
