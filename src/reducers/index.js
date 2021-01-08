import { combineReducers } from "redux";

import catsReducer from "./catsReducer";
import favouritesReducer from "./favouritesReducer";
import votesReducer from "./votesReducer";

export default combineReducers({
  cats: catsReducer,
  favourites: favouritesReducer,
  votes: votesReducer,
});
