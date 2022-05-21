import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmApi } from "../../api/api";
import { IMovie } from "../../types/Film";
import "./FilmItemPage.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FilmItemPage: FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);
  const movieId = useParams();
  const test = Number(movieId.id);

  const [movie, setMovie] = useState<IMovie | null>(null);

  const film = movie;
  console.log("FILM", film);

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
    console.log(test, "inputValue");
    delFavFilmAC(test);
  };
  return (
    <>
      <div className="modal-markup">
        <div className="modal-poster-container">
          <img
            className="movie_modal_img"
            src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
          ></img>
        </div>
        <div className="modal_movie_description">
          <div className="modal-table">
            <table className="moda_table-list">
              <h2 className="movie_name">{film?.title}</h2>
              <tr>
                <td className="modal-table_name">Vote / Votes</td>
                <td>
                  <span className="table_vote">{film?.vote_average}</span> /{" "}
                  {film?.vote_count}
                </td>
              </tr>
              <tr>
                <td className="modal-table_name">Popularity</td>
                <td>{film?.popularity}</td>
              </tr>
              <tr>
                <td className="modal-table_name">Original Title</td>
                <td>{film?.original_title}</td>
              </tr>
              <tr>
                <td className="modal-table_name">Genre</td>
                <td>
                  <ul>
                    {film?.genres &&
                      film?.genres.map(({ name }) => <li>{name}</li>)}
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <p className="about">About</p>
          <p className="modal_description-filme">{film?.overview}</p>
          <div className="modal_buttnons">
            <button
              className="modal_btn modal_btn_wotched"
              onClick={handleSubmitButton}
            >
              add to Watched
            </button>
            <button
              className="modal_btn modal_btn_queue"
              onClick={handleSubmitButtonDel}
            >
              Del
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmItemPage;
