import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <header className="header header-shadow">
        <div className="header-nav container">
          <nav className="main-nav">
            <a className="logo link" href="./index.html">
              <span className="title">MovieDB</span>
            </a>
            <ul className="site__nav list">
              <li className="site-nav__item">
                <NavLink
                  to="/films"
                  id="home"
                  className="site-nav__link-home link link__current"
                >
                  Пользователи
                </NavLink>
              </li>
              <li className="site-nav__item">
                <NavLink
                  to="/favoriteFilms"
                  id="library"
                  className="site-nav__link-library link"
                >
                  My Favorite
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
