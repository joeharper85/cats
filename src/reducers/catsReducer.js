import { FETCH_CATS } from "../actions";

export default (state = { cats: [] }, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return action.payload;
    default:
      return state;
  }
};
