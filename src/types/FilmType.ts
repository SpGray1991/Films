export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: any[];
  overview: string;
  tagline: string;
}

export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieCardProps {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
}

export interface FilmState {
  films: IFilm[];
  loading: boolean;
  error: null | string;
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
  payload: IFilm[];
}

interface ApiFilmSuccessAction {
  type: FilmActionTypes.API_FILMS_SUCCESS;
  payload: IFilm[];
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
