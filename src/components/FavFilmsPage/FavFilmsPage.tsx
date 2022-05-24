import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MovieCard from "../MovieCard/MovieCard";

const FavFilmsPage: React.FC = () => {
  const { favFilms } = useTypedSelector((state) => state.favFilms);

  return (
    <main className="content">
      <div className="container">
        <ul className="movie-list">
          {favFilms &&
            favFilms.map(({ title, id, vote_average, poster_path }) => (
              <MovieCard
                title={title}
                id={id}
                poster_path={poster_path}
                vote_average={vote_average}
                key={id}
              />
            ))}
        </ul>
      </div>
    </main>
  );
};

export default FavFilmsPage;
