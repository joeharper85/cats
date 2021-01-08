import { combineReducers } from "redux";

import catsReducer from "./catsReducer";
import favouritesReducer from "./favouritesReducer";
import votesReducer from "./votesReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  cats: catsReducer,
  favourites: favouritesReducer,
  votes: votesReducer,
  error: errorReducer,
});
