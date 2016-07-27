import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Window from './Window'
import Add from './Crews-Crews-Add'

import {addCrew, deleteCrew} from 'redux/modules/crews'

import classes from './Crews-Crews.scss'

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
    console.log('fuckc')
    this.setState({showAddModal: !this.state.showAddModal})
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
              </Link>
            </div>
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
