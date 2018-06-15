export default function reducer(
  state = {
    fixtures: {},
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_FIXTURES": {
      return { ...state, fetching: true };
    }
    case "FETCH_FIXTURES_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_FIXTURES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        fixtures: action.payload
      };
    }
  }

  return state;
}
