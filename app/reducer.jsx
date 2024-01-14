const Map = require("immutable").Map;
 
const reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_YES":
        state_update_var = state.update("count_yes", (count_yes) => (count_yes) + 1);
        return state_update_var;
    case "ADD_NO":
        return state.update("count_no", count_no => count_no + 1);
    case "SET_YES_ZERO":
        return state.update("count_yes", count_yes => 0);
    case "SET_NO_ZERO":
        return state.update("count_no", count_no => 0);
  }
  return state;
}
module.exports = reducer;