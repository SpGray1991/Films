import { Dispatch } from "redux";
import { FilmAction, FilmActionTypes, IFilm } from "../../types/FilmType";
import { filmApi } from "../../api/api";

export const getFilms = () => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.API_FILMS });
      const response = await filmApi.popularFilms();
      dispatch({
        type: FilmActionTypes.API_FILMS_SUCCESS,
        payload: response.results,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.API_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке фильмов!",
      });
    }
  };
};

export const addScrollFilms = (receivedFilms: IFilm[]) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({
        type: FilmActionTypes.SET_FILMS,
        payload: receivedFilms,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.API_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке фильмов!",
      });
    }
  };
};
