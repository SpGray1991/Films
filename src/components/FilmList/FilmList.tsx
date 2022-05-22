import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import "./FilmList.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { filmApi } from "../../api/api";
import { Link } from "react-router-dom";

const FilmList: React.FC = () => {
  const { films, error, loading } = useTypedSelector((state) => state.film);

  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(2);

  const { addScrollFilms, getFilms } = useActions();

  useEffect(() => {
    getFilms();
  }, []);

  const fetchData = async () => {
    const receivedFilms = await filmApi.addFilms(page);

    addScrollFilms(receivedFilms.results);
    if (receivedFilms.length === 0 || receivedFilms.length < 10) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <InfiniteScroll
      dataLength={films.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      <main className="content">
        <div className="container">
          <ul className="movie-list">
            {films &&
              films.map(({ title, id, poster_path, vote_average }) => (
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
                        <span className="rating">{vote_average}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </InfiniteScroll>
  );
};

export default FilmList;
