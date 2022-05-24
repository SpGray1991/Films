import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmApi } from "../../api/api";
import { IMovie } from "../../types/FilmType";
import "./FilmItemPage.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FilmItemPage: FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);
  const movieId = useParams();
  const ID = Number(movieId.id);

  const [movie, setMovie] = useState<IMovie | null>(null);

  const filmPoster = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
    : "../../images/cinema.jpg";

  useEffect(() => {
    filmApi
      .movieInformation(ID)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [ID]);

  const { addFavFilmAC, delFavFilmAC } = useActions();

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!favFilms.some((f, index) => f.id === ID)) {
      addFavFilmAC(ID);
    }
  };

  const handleSubmitButtonDel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    delFavFilmAC(ID);
  };
  return (
    <>
      <div className="wrapper-item-film" key={movie?.id}>
        <div className="poster-container">
          <div className="movie-box-img">
            <img
              className="movie_img"
              src={filmPoster}
              alt={movie?.title}
            ></img>
          </div>
        </div>
        <div className="movie_description">
          <div className="table">
            <table className="table-list">
              <tbody>
                <tr>
                  <td>
                    <h2 className="movie_name">{movie?.title}</h2>
                  </td>
                </tr>

                <tr>
                  <td className="table_name">Vote</td>
                  <td>
                    <span className="table_vote">{movie?.vote_average}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table_name">Release date</td>
                  <td>{movie?.release_date}</td>
                </tr>
                <tr>
                  <td className="table_name">Tagline</td>
                  <td>{movie?.tagline}</td>
                </tr>
                <tr>
                  <td className="table_name">Genre</td>
                  <td>
                    <ul>
                      {movie?.genres &&
                        movie?.genres.map(({ name, id }) => (
                          <li key={id}>{name}</li>
                        ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="about">About</p>
          <p className="description-film">{movie?.overview}</p>
          <div className="buttons">
            <button className="movie_btn" onClick={handleSubmitButton}>
              add to favorite
            </button>
            <button className="movie_btn" onClick={handleSubmitButtonDel}>
              del from favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmItemPage;
