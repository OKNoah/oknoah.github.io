const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const REGISTER = 'redux/modules/REGISTER'
const REGISTER_SUCCESS = 'redux/modules/REGISTER_SUCCESS'
const REGISTER_FAILURE = 'redux/modules/REGISTER_FAILURE'
const LOGOUT = 'redux/modules/LOGOUT'
const LOGOUT_SUCCESS = 'redux/modules/LOGOUT_SUCCESS'
const LOGOUT_FAILURE = 'redux/modules/LOGOUT_FAILURE'
const GET_USER = 'redux/modules/GET_USER'
const GET_USER_SUCCESS = 'redux/modules/GET_USER_SUCCESS'
const GET_USER_FAILURE = 'redux/modules/GET_USER_FAILURE'

const initialState = {
  loaded: false
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      if (__CLIENT__) window.localStorage.authToken = action.result.data.authToken

      return {
        ...state,
        ...action.result,
        loggingIn: false
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        data: null
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.result
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.result,
        loaded: true
      }

    case LOGOUT:
      if (__CLIENT__) delete window.localStorage.authToken

      return {
        ...state,
        data: null
      }

    default:
      return state;
  }
}

export function isLoaded (globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function login (credentials) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/session', {
      data: credentials
    })
  };
}

export function register (credentials) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE],
    promise: (client) => client.post('/user', {
      data: credentials
    })
  }
}

export function getUser () {
  return {
    types: [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE],
    promise: (client) => client.get('/user/me', {
      headers: { Authorization: window.localStorage.authToken }
    })
  }
}

export function logout () {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    promise: () => (Promise.resolve())
  }
}
