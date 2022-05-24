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
  const test = Number(movieId.id);

  const [movie, setMovie] = useState<IMovie | null>(null);

  const film = movie;

  useEffect(() => {
    filmApi
      .movieInformation(test)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [test]);

  const { addFavFilmAC, delFavFilmAC } = useActions();

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!favFilms.some((f, index) => f.id === test)) {
      addFavFilmAC(test);
    }
  };

  const handleSubmitButtonDel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    delFavFilmAC(test);
  };
  return (
    <>
      <div className="wrapper-item-film" key={film?.id}>
        <div className="poster-container">
          <div className="movie-box-img">
            <img
              className="movie_img"
              src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
              alt={film?.title}
            ></img>
          </div>
        </div>
        <div className="movie_description">
          <div className="table">
            <table className="table-list">
              <h2 className="movie_name">{film?.title}</h2>
              <tr>
                <td className="table_name">Vote / Votes</td>
                <td>
                  <span className="table_vote">{film?.vote_average}</span> /{" "}
                  {film?.vote_count}
                </td>
              </tr>
              <tr>
                <td className="table_name">Popularity</td>
                <td>{film?.popularity}</td>
              </tr>
              <tr>
                <td className="table_name">Original Title</td>
                <td>{film?.original_title}</td>
              </tr>
              <tr>
                <td className="table_name">Genre</td>
                <td>
                  <ul>
                    {film?.genres &&
                      film?.genres.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <p className="about">About</p>
          <p className="description-film">{film?.overview}</p>
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
