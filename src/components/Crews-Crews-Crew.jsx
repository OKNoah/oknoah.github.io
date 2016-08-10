import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import classes from './Crews-Crews-Crew.scss'

@connect(state => ({
  user: state.auth.data
}))
export default class Crew extends Component {
  static propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    slug: PropTypes.string,
    user: PropTypes.object,
    onDeleteCrew: PropTypes.func
  }

  deleteCrewHandler () {
    this.props.onDeleteCrew(this.props.slug)
  }

  render () {
    const {name, slug, active} = this.props

    return (
      <div className={active ? classes.crewActive : classes.crew}>
        {this.props.user &&
          <i
            className={classes.deleteIcon + ' fa fa-trash'}
            title="Delete this crew"
            onClick={::this.deleteCrewHandler}
          />
        }
        <Link to={'/crews/' + slug}>
          {name}
        </Link>
      </div>
    );
  }
}
