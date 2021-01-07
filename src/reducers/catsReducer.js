export default (state = { cats: [] }, action) => {
  switch (action.type) {
    case "FETCH_CATS":
      return { cats: [...state.cats, action.payload] };

    default:
      return state;
  }
};
