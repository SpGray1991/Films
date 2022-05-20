import React from "react";
import "./FavFilms.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FavFilms: React.FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);

  console.log("FAV", favFilms);

  return (
    <main className="content">
      1244444444445
      <div className="container wrapper-films" id="searchMain">
        <ul className="movie-list">
          {favFilms &&
            favFilms.map(
              ({
                title,
                id,
                poster_path,
                genre_ids,
                release_date,
                vote_average,
              }) => (
                <li className="card-film card-film_scale" key={id}>
                  <Link
                    to={{
                      pathname: `/films/${id}`,
                    }}
                  >
                    <div className="card-film__box-img modal">
                      <img
                        className="card-film__img"
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                      />
                    </div>
                    <div className="card-film__description">
                      <h2 className="card-film__title">{title}</h2>
                      <div className="card-film__inf">
                        <p className="card-film__genre">{genre_ids}</p>
                        <span className="year">{release_date}</span>
                        <span className="rating">{vote_average}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            )}
        </ul>
      </div>
    </main>
  );
};

export default FavFilms;
