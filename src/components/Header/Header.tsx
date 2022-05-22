import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: React.FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);
  const counterFavFilms = favFilms.length;
  return (
    <div>
      <header className="header header-shadow">
        <div className="header-nav">
          <nav className="main-nav">
            <ul className="site__nav">
              <li className="site-nav__item">
                <NavLink to="/films" className=" link">
                  MovieDB
                </NavLink>
              </li>
              <li className="site-nav__item">
                <NavLink to="/favoriteFilms" className=" link">
                  My Favorite {counterFavFilms}
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
