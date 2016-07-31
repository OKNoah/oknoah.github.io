const GET_MEMBERS = 'redux/modules/members/GET_MEMBERS'
const GET_MEMBERS_SUCCESS = 'redux/modules/members/GET_MEMBERS_SUCCESS'
const GET_MEMBERS_FAILURE = 'redux/modules/members/GET_MEMBERS_FAILURE'

const GET_CREW_MEMBERS = 'redux/modules/members/GET_CREW_MEMBERS'
const GET_CREW_MEMBERS_SUCCESS = 'redux/modules/members/GET_CREW_MEMBERS_SUCCESS'
const GET_CREW_MEMBERS_FAILURE = 'redux/modules/members/GET_CREW_MEMBERS_FAILURE'

const ADD_MEMBER = 'redux/modules/members/ADD_MEMBER'
const ADD_MEMBER_SUCCESS = 'redux/modules/members/ADD_MEMBER_SUCCESS'
const ADD_MEMBER_FAILURE = 'redux/modules/members/ADD_MEMBER_FAILURE'

const DELETE_MEMBER = 'redux/modules/members/DELETE_MEMBER'
const DELETE_MEMBER_SUCCESS = 'redux/modules/members/DELETE_MEMBER_SUCCESS'
const DELETE_MEMBER_FAILURE = 'redux/modules/members/DELETE_MEMBER_FAILURE'

const JOIN_CREW = 'redux/modules/members/JOIN_CREW'
const JOIN_CREW_SUCCESS = 'redux/modules/members/JOIN_CREW_SUCCESS'
const JOIN_CREW_FAILURE = 'redux/modules/members/JOIN_CREW_FAILURE'

const LEAVE_CREW = 'redux/modules/members/LEAVE_CREW'
const LEAVE_CREW_SUCCESS = 'redux/modules/members/LEAVE_CREW_SUCCESS'
const LEAVE_CREW_FAILURE = 'redux/modules/members/LEAVE_CREW_FAILURE'

const initialState = {
  loaded: false
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...initialState
      }

    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.result.data]
      }

    case DELETE_MEMBER_SUCCESS:
      return {
        ...action.result
      }

    case GET_MEMBERS_SUCCESS:
      return {
        ...action.result
      }

    case GET_CREW_MEMBERS:
      return {
        ...initialState
      }

    case GET_CREW_MEMBERS_SUCCESS:
      return {
        ...action.result
      }

    case JOIN_CREW_SUCCESS:
      return {
        ...state
      }

    case LEAVE_CREW_SUCCESS:
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

export function getMembers () {
  return {
    types: [GET_MEMBERS, GET_MEMBERS_SUCCESS, GET_MEMBERS_FAILURE],
    promise: (client) => client.get('/member')
  }
}

export function getCrewMembers (crew) {
  const endpoint = '/crew/' + crew + '/member'

  return {
    types: [GET_CREW_MEMBERS, GET_CREW_MEMBERS_SUCCESS, GET_CREW_MEMBERS_FAILURE],
    promise: (client) => client.get(endpoint)
  }
}

export function addMember ({name, description, website}) {
  return {
    types: [ADD_MEMBER, ADD_MEMBER_SUCCESS, ADD_MEMBER_FAILURE],
    promise: (client) => client.post('/member', {
      data: {
        name,
        description,
        website
      }
    })
  }
}

export function deleteMember (member) {
  return {
    types: [DELETE_MEMBER, DELETE_MEMBER_SUCCESS, DELETE_MEMBER_FAILURE],
    promise: (client) => client.del('/member/' + member)
  }
}

export function joinCrew ({member, crew}) {
  const endpoint = '/crew/' + crew + '/member/' + member

  return {
    types: [JOIN_CREW, JOIN_CREW_SUCCESS, JOIN_CREW_FAILURE],
    promise: (client) => client.post(endpoint)
  }
}

export function leaveCrew ({member, crew}) {
  const endpoint = '/crew/' + crew + '/member/' + member

  return {
    types: [LEAVE_CREW, LEAVE_CREW_FAILURE, LEAVE_CREW_SUCCESS],
    promise: (client) => client.del(endpoint)
  }
}
