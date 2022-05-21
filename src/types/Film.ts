export interface FilmState {
  films: any[];
  loading: boolean;
  error: null | string;
}

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_title: string;
  genres: any[];
  overview: string;
}

export enum FilmActionTypes {
  API_FILMS = "API_FILMS",
  API_FILMS_SUCCESS = "API_FILMS_SUCCESS",
  API_FILMS_ERROR = "API_FILMS_ERROR",
  SET_FILMS = "SET_FILMS",
}

interface ApiFilmAction {
  type: FilmActionTypes.API_FILMS;
}

interface SetFilmAction {
  type: FilmActionTypes.SET_FILMS;
  payload: any[];
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
  | ApiFilmErrorAction
  | SetFilmAction;
