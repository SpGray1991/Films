import axios from "axios";
import { Dispatch } from "redux";
import { FilmAction, FilmActionTypes } from "../../types/Film";
import { popularFilms } from "../../api/api";

// API KEY: bb61dc25dd053645f0c0e694cadfcc24

export const apiFilms = () => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.API_FILMS });
      const response = await popularFilms();
      console.log("RES", response.results);

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

export const setFilms = (test: any[]) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.API_FILMS });
      const response = test;
      console.log("SET", response);

      dispatch({
        type: FilmActionTypes.API_FILMS_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.API_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке фильмов!",
      });
    }
  };
};
