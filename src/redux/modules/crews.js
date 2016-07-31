const GET_CREWS = 'redux/modules/crews/GET_MEMBERS'
const GET_CREWS_SUCCESS = 'redux/modules/crews/GET_MEMBERS_SUCCESS'
const GET_CREWS_FAILURE = 'redux/modules/crews/GET_MEMBERS_FAILURE'

const ADD_CREW = 'redux/modules/crew/ADD_CREW'
const ADD_CREW_SUCCESS = 'redux/modules/crew/ADD_CREW_SUCCESS'
const ADD_CREW_FAILURE = 'redux/modules/crew/ADD_CREW_FAILURE'

const DELETE_CREW = 'redux/modules/crew/DELETE_CREW'
const DELETE_CREW_SUCCESS = 'redux/modules/crew/DELETE_CREW_SUCCESS'
const DELETE_CREW_FAILURE = 'redux/modules/crew/DELETE_CREW_FAILURE'

const initialState = {
  data: [],
  loaded: false
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_CREWS:
      return {
        ...initialState
      }

    case GET_CREWS_SUCCESS:
      return {
        ...action.result
      }

    case ADD_CREW_SUCCESS:
      const newState = state.data.slice(0)
      newState.push(action.result.data)

      return {
        data: newState
      }

    case DELETE_CREW_SUCCESS:
      return {
        ...action.result
      }

    default:
      return state;
  }
}

export function isLoaded (globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export const getCrews = () => ({
  types: [GET_CREWS, GET_CREWS_SUCCESS, GET_CREWS_FAILURE],
  promise: (client) => client.get('/crew')
})

export const addCrew = ({name, description}) => ({
  types: [ADD_CREW, ADD_CREW_SUCCESS, ADD_CREW_FAILURE],
  promise: (client) => client.post('/crew', {
    data: {
      name,
      description
    }
  })
})

export const deleteCrew = (crew) => ({
  types: [DELETE_CREW, DELETE_CREW_SUCCESS, DELETE_CREW_FAILURE],
  promise: (client) => client.del('/crew/' + crew)
})
