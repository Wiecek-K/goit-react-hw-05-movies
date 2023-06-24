import { useEffect, useState } from "react";
import { fetchDetails } from "../services/api";
import type { MovieDetailsT } from "../types/types";
import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MoviePage.module.css";

export const MoviePage = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [filmDetails, setFilmDetails] = useState<MovieDetailsT>();

  useEffect(() => {
    if (filmId) {
      (async () => {
        const data = await fetchDetails(filmId);
        setFilmDetails(data);
      })();
    }
  }, [filmId]);

  return (
    <>
      <div className={css.filmDetailsWrapper}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/original/${filmDetails?.poster_path}`}
        />
        <div className={css.textWrapper}>
          <h2>{filmDetails?.title}</h2>
          <p>
            User Score <span>{`${filmDetails?.vote_average}%`}</span>
          </p>
          <h3>Overview</h3>
          <p>{filmDetails?.overview}</p>
          <h3>Genres</h3>
          <p>{filmDetails?.genres.map((genre) => genre.name)}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${filmId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${filmId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
