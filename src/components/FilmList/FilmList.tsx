import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import s from "./MovieList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { addFilms } from "../../api/api";

const FilmList: React.FC = () => {
  const { films, error, loading } = useTypedSelector((state) => state.film);

  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(2);

  const { apiFilms, setFilms } = useActions();

  useEffect(() => {
    apiFilms();
  }, []);

  const fetchData = async () => {
    const receivedFilms = await addFilms(page);

    setFilms(receivedFilms.results);
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
      <div>
        <ul className={s.Galery}>
          {films &&
            films.map(({ title, id, poster_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="300"
                />
                <p>{title}</p>
              </li>
            ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
};

export default FilmList;
