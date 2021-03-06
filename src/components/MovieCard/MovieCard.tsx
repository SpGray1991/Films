import { Link } from "react-router-dom";
import "./MovieCard.scss";
import { MovieCardProps } from "../../types/FilmType";

function MovieCard({ title, id, poster_path, vote_average }: MovieCardProps) {
  return (
    <li className="card-film card-film_scale" key={id}>
      <Link
        to={{
          pathname: `/${id}`,
        }}
        className="link-to-film"
      >
        <div className="card-film__box-img">
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
  );
}

export default MovieCard;
