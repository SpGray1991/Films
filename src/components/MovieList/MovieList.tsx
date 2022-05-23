import React from "react";

import "./FilmList.scss";

const MovieList: React.FC = () => {
  return (
    <main className="content">
      <div className="container">
        <ul className="movie-list"></ul>
      </div>
    </main>
  );
};

export default MovieList;
