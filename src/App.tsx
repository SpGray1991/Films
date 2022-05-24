import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import FilmListPage from "./components/FilmListPage/FilmListPage";
import Header from "./components/Header/Header";
import FilmItemPage from "./components/FilmPage/FilmItemPage";
import FavFilms from "./components/FavFilmsPage/FavFilmsPage";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<FilmListPage />} />
        <Route path="/favoriteFilms/*" element={<FavFilms />} />
        <Route path="/:id" element={<FilmItemPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
