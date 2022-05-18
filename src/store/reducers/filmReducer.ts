import { FilmAction, FilmActionTypes, FilmState } from "../../types/Film";

const initialState: FilmState = {
  films: [],
  loading: false,
  error: null,
};

export const filmReducer = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    case FilmActionTypes.API_FILMS:
      return { loading: true, error: null, films: [] };
    case FilmActionTypes.API_FILMS_SUCCESS:
      return {
        loading: false,
        error: null,
        films: action.payload,
      };
    case FilmActionTypes.API_FILMS_ERROR:
      return {
        loading: false,
        error: action.payload,
        films: [],
      };
    default:
      return state;
  }
};
