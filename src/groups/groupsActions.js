import axios from "axios";

export function fetchGroups() {
  return function(dispatch) {
    dispatch({ type: "FETCH_GROUPS" });
    axios
      .get("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.standings.json", {
      })
      .then(response => {
        dispatch({ type: "FETCH_GROUPS_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_GROUPS_REJECTED", payload: err });
      });
  };
}


/**
 * .get("http://api.football-data.org/v1/competitions/467/leagueTable", {
        headers: { "X-Auth-Token": "dee3451427294b19814fbfe4e36b4c72" }
      })
 */