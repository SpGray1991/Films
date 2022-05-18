import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import s from "./MovieList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const FilmList: React.FC = () => {
  const { films, error, loading } = useTypedSelector((state) => state.film);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  let F = films;

  console.log("FILMS", F.length);

  const { apiFilms } = useActions();

  useEffect(() => {
    apiFilms();
  }, []);

  const fetchFilms = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=bb61dc25dd053645f0c0e694cadfcc24&page=${page}`
      // For json server use url below
      // `http://localhost:3004/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    console.log("fetch", data);
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchFilms();
    console.log("fetchData", commentsFormServer);

    /* setFilms([...films, ...commentsFormServer]); */
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  if (loading) {
    return <h1>Loading...1</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <InfiniteScroll
      dataLength={films.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...2</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
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
