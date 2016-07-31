const GET_MEMBERS_CREWS = 'redux/modules/crew/GET_MEMBERS_CREWS'
const GET_MEMBERS_CREWS_SUCCESS = 'redux/modules/crew/GET_MEMBERS_CREWS_SUCCESS'
const GET_MEMBERS_CREWS_FAILURE = 'redux/modules/crew/GET_MEMBERS_CREWS_FAILURE'

const initialState = {
  data: [],
  loaded: false
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_MEMBERS_CREWS:
      return {
        ...initialState
      }

    case GET_MEMBERS_CREWS_SUCCESS:
      console.log('member', action.result);
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

export const getMembersCrews = (member) => ({
  types: [GET_MEMBERS_CREWS, GET_MEMBERS_CREWS_SUCCESS, GET_MEMBERS_CREWS_FAILURE],
  promise: (client) => client.get('/member/' + member + '/crew')
})
