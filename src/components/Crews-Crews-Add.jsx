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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>New crew name:</label>
        <Field
          name="name"
          component="input"
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
