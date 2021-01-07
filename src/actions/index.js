// import _ from "lodash";
import catsApi from "../apis/catsApi";

export const FETCH_CATS = "FETCH_CATS";

export const fetchCats = (dispatch) => {
  return async (dispatch) => {
    const response = await catsApi.get("/images");

    console.log(response.data);

    dispatch({ type: "FETCH_CATS", payload: response.data });
  };
};
