import { useEffect, useState } from "react";
import { fetchPopular } from "../services/api";
import type { PopularResultsT } from "../types/types";
import { Link } from "react-router-dom";

export const Home = () => {
  const [filmsList, setFilmsList] = useState<PopularResultsT[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchPopular();
      setFilmsList(data.results);
    })();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {filmsList.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
