import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { filmApi } from "../../api/api";
import { IMovie } from "../../types/Film";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FilmItemPage: FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);
  const movieId = useParams();
  const navigate = useNavigate();
  const test = Number(movieId.id);

  const [movie, setMovie] = useState<IMovie | null>(null);

  const films = movie;

  console.log("FAV", favFilms);
  console.log(
    "RES",
    favFilms.some((f, index) => f.id === test)
  );

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
      <div>
        <button onClick={() => navigate("/films", { replace: true })}>
          Back
        </button>
        <h1>Страница пользователя {films?.title}</h1>
        <div>{films?.release_date}</div>
        <div>{films?.id}</div>
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
    </>
  );
};

export default FilmItemPage;
