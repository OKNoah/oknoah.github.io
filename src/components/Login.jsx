import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {reduxForm, Field} from 'redux-form'

import classes from './Login.scss'

@reduxForm({
  form: 'login'
})
export default class Login extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    onToggleRegistering: PropTypes.func,
    registering: PropTypes.bool,
    dismiss: PropTypes.func
  }

  loginHandler (fields) {
    this.props.onSubmit(fields)
    .then(() => {
      this.props.dismiss()
    })
  }

  render () {
    const {handleSubmit, registering, onToggleRegistering} = this.props

    return (
      <div
        id="Login"
      >
        <h1>{ !registering ? 'Login' : 'Register' }</h1>
        <form onSubmit={ handleSubmit(::this.loginHandler) }>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <Field
              id="Login_email"
              name="email"
              type="text"
              className="form-control"
              component="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <Field
              id="Login_password"
              name="password"
              type="password"
              className="form-control"
              component="input"
            />
          </div>

          { registering &&
            <div className="form-group">
              <label htmlFor="">Display name</label>
              <Field
                id="Login_name"
                name="name"
                type="text"
                className="form-control"
                component="input"
              />
            </div>
          }
          <div className={classes.dialogButtons}>
            <input
              type="button"
              className={classes.registerToggle}
              onClick={ onToggleRegistering }
              value={ !registering ? 'Register' : 'Login' }
            />

            <button
              type="submit"
              className={ classes.submit }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
