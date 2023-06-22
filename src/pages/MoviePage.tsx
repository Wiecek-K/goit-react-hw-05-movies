import { useEffect, useState } from "react";
import { fetchDetails, fetchPopular } from "../services/api";
import type { MovieDetailsT } from "../types/types";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [filmDetails, setFilmDetails] = useState<MovieDetailsT>();

  useEffect(() => {
    if (filmId) {
      const filmIdToNumber = parseInt(filmId, 10);
      (async () => {
        const data = await fetchDetails(filmIdToNumber);
        console.log("to ten", data);
        setFilmDetails(data);
      })();
    }
  }, [filmId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${filmDetails?.poster_path}`}
      />
      <h2>{filmDetails?.title}</h2>
      <p>
        User Score <span>{`${filmDetails?.vote_average}%`}</span>
      </p>
      <h3>Overview</h3>
      <p>{filmDetails?.overview}</p>
      <h3>Genres</h3>
      <p>{filmDetails?.genres.map((genre) => genre.name)}</p>
    </div>
  );
};
