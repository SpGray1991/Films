import * as FilmActionCreators from "./film";
import * as favFilmActionCreators from "./favFilm";

export default {
  ...FilmActionCreators,
  ...favFilmActionCreators,
};
