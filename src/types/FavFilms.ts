import { IFilm } from "./FilmType";

export interface favFilmsState {
  favFilms: IFilm[];
  error: null | string;
}

export enum favFilmsActionTypes {
  FAV_API_FILMS_ERROR = "FAV_API_FILMS_ERROR",
  ADD_FAV_FILM = "ADD_FAV_FILM",
  DEL_FAV_FILM = "DEL_FAV_FILM",
}

interface AddFavFilmAction {
  type: favFilmsActionTypes.ADD_FAV_FILM;
  payload: IFilm;
}

interface DelFavFilmAction {
  type: favFilmsActionTypes.DEL_FAV_FILM;
  payload: number;
}

interface ApiFilmErrorAction {
  type: favFilmsActionTypes.FAV_API_FILMS_ERROR;
  payload: string;
}

export type favFilmsAction =
  | ApiFilmErrorAction
  | AddFavFilmAction
  | DelFavFilmAction;
