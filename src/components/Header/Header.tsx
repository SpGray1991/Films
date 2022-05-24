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
        <div className="header-nav container">
          <nav className="main-nav">
            <ul className="site__nav">
              <li className="site-nav__item">
                <NavLink
                  to="/"
                  className={(navData) =>
                    navData.isActive ? "active" : "link"
                  }
                >
                  MovieDB
                </NavLink>
              </li>
              <li className="site-nav__item">
                <NavLink
                  to="/favoriteFilms"
                  className={(navData) =>
                    navData.isActive ? "active" : "link"
                  }
                >
                  My Favorite <span className="counter">{counterFavFilms}</span>
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
