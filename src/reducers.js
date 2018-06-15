import { combineReducers } from "redux";

import groups from "./groups/groupsReducer";
import fixtures from "./fixtures/fixturesReducer";

export default combineReducers({
  groups,
  fixtures
});
