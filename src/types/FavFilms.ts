export interface favFilmsState {
  favFilms: any[];
  error: null | string;
}

/* export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
} */

export enum favFilmsActionTypes {
  FAV_API_FILMS_ERROR = "FAV_API_FILMS_ERROR",
  ADD_FAV_FILM = "ADD_FAV_FILM",
  DEL_FAV_FILM = "DEL_FAV_FILM",
}

interface AddFavFilmAction {
  type: favFilmsActionTypes.ADD_FAV_FILM;
  payload: any[];
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
