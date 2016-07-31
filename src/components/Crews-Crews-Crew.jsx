import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import classes from './Crews-Crews-Crew.scss'

@connect(state => ({
  user: state.auth.data
}))
export default class Crew extends Component {
  static propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    user: PropTypes.object,
    onDeleteCrew: PropTypes.func
  }

  deleteCrewHandler () {
    this.props.onDeleteCrew(this.props.slug)
  }

  render () {
    const {name, slug} = this.props;

    return (
      <div className={classes.crew}>
        {this.props.user &&
          <i
            className={classes.deleteIcon + ' fa fa-trash'}
            alt="Delete this crew"
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
