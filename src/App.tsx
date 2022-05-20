import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmList from "./components/FilmList/FilmList";
import Header from "./components/Header/Header";
import FilmItemPage from "./components/FilmPage/FilmItemPage";
import FavFilms from "./components/FavFilms/FavFilms";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/films/*" element={<FilmList />} />
        <Route path="/favoriteFilms/*" element={<FavFilms />} />
        <Route path={"/films/:id"} element={<FilmItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
