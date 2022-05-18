import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as FilmActionCreators from "../store/action-creators/film";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(FilmActionCreators, dispatch);
};
