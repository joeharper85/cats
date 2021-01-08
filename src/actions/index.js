import catsApi from "../apis/catsApi";

export const FETCH_CATS = "FETCH_CATS";
export const FETCH_FAVOURITES = "FETCH_FAVOURITES";
export const FETCH_VOTES = "FETCH_VOTES";
export const SET_ERROR = "SET_ERROR";

export const UP_VOTE = 1;
export const DOWN_VOTE = 0;

export const fetchCats = () => {
  return async (dispatch) => {
    const response = await catsApi
      .get("/images", { params: { limit: "100" } })
      .catch(() => {
        dispatch(setError("Unable to fetch cats, refresh page to try again!"));
      });

    if (response) {
      dispatch({ type: FETCH_CATS, payload: response.data });
    }
  };
};

export const favouriteCat = (id) => {
  return async (dispatch) => {
    const response = await catsApi
      .post("/favourites", { image_id: id })
      .catch(() => {
        dispatch(setError("Unable to favourite cat, please try again later!"));
      });

    if (response) {
      dispatch(fetchFavourites());
    }
  };
};

export const unfavouriteCat = (id) => {
  return async (dispatch) => {
    const response = await catsApi.delete(`/favourites/${id}`).catch(() => {
      dispatch(setError("Unable to unfavourite cat, please try again later!"));
    });

    if (response) {
      dispatch(fetchFavourites());
    }
  };
};

export const fetchFavourites = () => {
  return async (dispatch) => {
    const response = await catsApi.get("/favourites").catch(() => {
      setError("Unable to fetch favourites, refresh page to try again!");
    });

    if (response) {
      dispatch({
        type: FETCH_FAVOURITES,
        payload: response.data,
      });
    }
  };
};

export const voteCat = (id, vote) => {
  return async (dispatch) => {
    const response = await catsApi
      .post("/votes", {
        image_id: id,
        value: vote,
      })
      .catch(() => {
        dispatch(setError("Unable to vote for cat, please try again later!"));
      });

    if (response) {
      dispatch(fetchVotes());
    }
  };
};

export const fetchVotes = () => {
  return async (dispatch) => {
    const response = await catsApi.get("/votes").catch(() => {
      dispatch(setError("Unable to fetch votes, refresh page to try again!"));
    });

    if (response) {
      dispatch({
        type: FETCH_VOTES,
        payload: response.data,
      });
    }
  };
};

export const setError = (errorMessage) => ({
  type: SET_ERROR,
  payload: errorMessage,
});
