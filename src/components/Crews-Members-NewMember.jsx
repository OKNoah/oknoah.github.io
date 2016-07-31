import React, {Component, PropTypes} from 'react'

import {Field, reduxForm} from 'redux-form'

import classes from './Crews-Members-NewMember.scss'

@reduxForm({
  form: 'newMember'
})
export default class NewMember extends Component {
  static propTypes = {
    onAddMember: PropTypes.func,
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  render () {
    const {handleSubmit, onSubmit} = this.props

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.newMemberForm}
      >
        <h2>Add new member</h2>
        <label>Name</label>
        <Field
          name="name"
          component="input"
        />
        <label>Description</label>
        <Field
          name="description"
          component="textarea"
        />
        <label>Website URL</label>
        <Field
          name="website"
          component="input"
        />
        <button
          type="submit"
        >
          Create new user
        </button>
      </form>
    )
  }
}
