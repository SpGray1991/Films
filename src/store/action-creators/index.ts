import * as FilmActionCreators from "./filmAC";
import * as favFilmActionCreators from "./favFilmAC";

export default {
  ...FilmActionCreators,
  ...favFilmActionCreators,
};
