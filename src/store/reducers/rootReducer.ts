import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { favFilmsReducer } from "./favFilmsReducer";

export const rootReducer = combineReducers({
  film: filmReducer,
  favFilms: favFilmsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
