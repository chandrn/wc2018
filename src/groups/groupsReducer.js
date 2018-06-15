export default function reducer(state={
  groups: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_GROUPS": {
      return {...state, fetching: true}
    }
    case "FETCH_GROUPS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_GROUPS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        groups: action.payload,
      }
    }
  }

  return state
}