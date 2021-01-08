// import _ from "lodash";
import catsApi from "../apis/catsApi";

export const FETCH_CATS = "FETCH_CATS";
export const FETCH_FAVOURITES = "FETCH_FAVOURITES";
export const FETCH_VOTES = "FETCH_VOTES";

export const UP_VOTE = 1;
export const DOWN_VOTE = 0;

export const fetchCats = () => {
  return async (dispatch) => {
    const response = await catsApi.get("/images", { params: { limit: "100" } });

    if (response.status === 200) {
      dispatch({ type: FETCH_CATS, payload: response.data });
    }
  };
};

export const favouriteCat = (id) => {
  return async (dispatch) => {
    const response = await catsApi.post("/favourites", { image_id: id });

    if (response.status === 200) {
      dispatch(fetchFavourites());
    }
  };
};

export const unfavouriteCat = (id) => {
  return async (dispatch) => {
    const response = await catsApi.delete(`/favourites/${id}`);

    if (response.status === 200) {
      dispatch(fetchFavourites());
    }
  };
};

export const fetchFavourites = () => {
  return async (dispatch) => {
    const response = await catsApi.get("/favourites");

    if (response.status === 200) {
      dispatch({
        type: FETCH_FAVOURITES,
        payload: response.data,
      });
    }
  };
};

export const voteCat = (id, vote) => {
  return async (dispatch) => {
    const response = await catsApi.post("/votes", {
      image_id: id,
      value: vote,
    });

    if (response.status === 200) {
      dispatch(fetchVotes());
    }
  };
};

export const fetchVotes = () => {
  return async (dispatch) => {
    const response = await catsApi.get("/votes");

    if (response.status === 200) {
      dispatch({
        type: FETCH_VOTES,
        payload: response.data,
      });
    }
  };
};
