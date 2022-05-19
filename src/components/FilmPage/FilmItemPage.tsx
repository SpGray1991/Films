import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { filmApi } from "../../api/api";
import { IMovie } from "../../types/Film";

const FilmItemPage: FC = () => {
  const movieId = useParams();
  const navigate = useNavigate();
  const test = Number(movieId.id);

  const [movie, setMovie] = useState<IMovie | null>(null);

  const films = movie;

  useEffect(() => {
    filmApi
      .movieInformation(test)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [test]);

  return (
    <>
      <div>
        <button onClick={() => navigate("/films", { replace: true })}>
          Back
        </button>
        <h1>Страница пользователя {films?.title}</h1>
        <div>{films?.release_date}</div>
        <div>{films?.id}</div>
      </div>
    </>
  );
};

export default FilmItemPage;
