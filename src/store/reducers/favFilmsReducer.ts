import {
  favFilmsAction,
  favFilmsActionTypes,
  favFilmsState,
} from "../../types/FavFilms";

const initialState: favFilmsState = {
  favFilms: [],
  error: null,
};

export const favFilmsReducer = (
  state = initialState,
  action: favFilmsAction
): favFilmsState => {
  switch (action.type) {
    case favFilmsActionTypes.FAV_API_FILMS_ERROR:
      return {
        error: action.payload,
        favFilms: [],
      };

    case favFilmsActionTypes.ADD_FAV_FILM:
      return { ...state, favFilms: [...state.favFilms, action.payload] };

    case favFilmsActionTypes.DEL_FAV_FILM:
      return {
        ...state,
        favFilms: state.favFilms.filter((f) => f.id !== action.payload),
      };

    default:
      return state;
  }
};
