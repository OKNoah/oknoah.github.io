import React, {Component, PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'

import classes from './Crews-Crews-Add.scss'

@reduxForm({
  form: 'addCrew'
})
export default class Add extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  render () {
    const {handleSubmit, onSubmit} = this.props

    return (
      <form
        className={classes.addCrewForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Crew name</label>
        <Field
          name="name"
          component="input"
        />
        <label>Crew description</label>
        <Field
          name="description"
          component="textarea"
        />
        <button
          type="submit"
          className={ classes.submit }
        >
          Submit
        </button>
      </form>
    )
  }
}
