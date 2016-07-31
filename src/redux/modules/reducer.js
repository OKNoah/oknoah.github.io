import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as reduxAsyncConnect} from 'redux-async-connect'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import crews from './crews'
import members from './members'
import membersCrews from './membersCrews'

export default combineReducers({
  auth,
  crews,
  members,
  membersCrews,
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer
})
