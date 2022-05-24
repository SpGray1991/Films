import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmListPage from "./components/FilmListPage/FilmListPage";
import Header from "./components/Header/Header";
import FilmItemPage from "./components/FilmPage/FilmItemPage";
import FavFilms from "./components/FavFilmsPage/FavFilmsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<FilmListPage />} />
        <Route path="/favoriteFilms/*" element={<FavFilms />} />
        <Route path="/:id" element={<FilmItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
