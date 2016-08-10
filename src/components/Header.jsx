import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Window from './Window'
import Login from './Login'

import {login, register, logout, getUser} from 'redux/modules/auth'

import classes from './Header.scss'
import loginClasses from './Login.scss'

import logo from '../../static/logo.png'

@connect(
  state => ({
    user: state.auth.data
  }),
  dispatch => bindActionCreators({
    login,
    register,
    logout,
    getUser
  }, dispatch)
)
export default class Header extends Component {
  static propTypes = {
    params: PropTypes.object,
    login: PropTypes.func,
    children: PropTypes.element,
    user: PropTypes.object,
    register: PropTypes.func,
    logout: PropTypes.func,
    getUser: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      showLoginModal: false
    }
  }

  componentDidMount () {
    if (__CLIENT__ && window.localStorage.authToken) {
      this.props.getUser()
    }
  }

  showModalHandler () {
    this.setState({showLoginModal: true})
  }

  dismissModalHandler () {
    this.setState({showLoginModal: false})
  }

  logoutHandler () {
    this.props.logout()
  }

  render () {
    const {children, params, user} = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.headerWrapper}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={classes.navigation}>
              <Link
                className={classes.navItem}
                to="/"
              >
                Home
              </Link>
              <Link
                className={classes.navItem}
                to="/crews"
              >
                Crews
              </Link>
              {user &&
                <div
                  className={classes.navItem}
                  onClick={::this.logoutHandler}
                >
                  Logout
                </div>
              }
            </div>
          </div>
        </div>
        {children && React.cloneElement(children, {
          login,
          params
        })}
        { this.state.showLoginModal &&
          <Window
            params={params}
            dismiss={::this.dismissModalHandler}
            className={loginClasses.modal}
          >
            <Login
              onSubmit={this.props.login}
            />
          </Window>
        }
        {!user &&
          <div
            onClick={::this.showModalHandler}
          >
            <i
              className="fa fa-lock"
              title="Login to administer the site"
            />
            {' Admin login'}
          </div>
        }
      </div>
    );
  }
}
