export interface FilmState {
  films: any[];
  loading: boolean;
  error: null | string;
}

export enum FilmActionTypes {
  API_FILMS = "API_FILMS",
  API_FILMS_SUCCESS = "API_FILMS_SUCCESS",
  API_FILMS_ERROR = "API_FILMS_ERROR",
}

interface ApiFilmAction {
  type: FilmActionTypes.API_FILMS;
}

interface ApiFilmSuccessAction {
  type: FilmActionTypes.API_FILMS_SUCCESS;
  payload: any[];
}

interface ApiFilmErrorAction {
  type: FilmActionTypes.API_FILMS_ERROR;
  payload: string;
}

export type FilmAction =
  | ApiFilmAction
  | ApiFilmSuccessAction
  | ApiFilmErrorAction;
