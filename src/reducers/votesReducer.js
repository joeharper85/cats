import { FETCH_VOTES } from "../actions";

export default (state = { votes: [] }, action) => {
  switch (action.type) {
    case FETCH_VOTES:
      return action.payload;
    default:
      return state;
  }
};
