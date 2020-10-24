export const initialState = {
  movie_id: [],
  user: null,
  typeOfMovie: null,
};

export const getMovieId = (movie_id) => {
  return movie_id;
};
const reducer = (state, action) => {
  console.log(action.username);
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movie_id: [...state.movie_id, action.item],
        typeOfMovie: action.item.type,
      };
    case "ADD_USERNAME":
      return {
        user: action.username,
        movie_id: [],
      };
    case "MAKE_NULL":
      return { movie_id: [] };
    case "SIGNOUT":
      return {
        movie_id: [],
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
