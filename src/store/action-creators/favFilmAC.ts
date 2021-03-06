import { Dispatch } from "redux";
import { favFilmsAction, favFilmsActionTypes } from "../../types/FavFilms";
import { filmApi } from "../../api/api";

export const addFavFilmAC =
  (movieId: number) => async (dispatch: Dispatch<favFilmsAction>) => {
    try {
      const response = await filmApi.movieInformation(movieId);
      dispatch({
        type: favFilmsActionTypes.ADD_FAV_FILM,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: favFilmsActionTypes.FAV_API_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке фильмов!",
      });
    }
  };

export const delFavFilmAC = (movieId: number) => {
  return (dispatch: Dispatch<favFilmsAction>) => {
    dispatch({
      type: favFilmsActionTypes.DEL_FAV_FILM,
      payload: movieId,
    });
  };
};
