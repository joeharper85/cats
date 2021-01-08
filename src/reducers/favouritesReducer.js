import { FETCH_FAVOURITES } from "../actions";

export default (state = { favourites: [] }, action) => {
  switch (action.type) {
    case FETCH_FAVOURITES:
      return action.payload;
    default:
      return state;
  }
};
