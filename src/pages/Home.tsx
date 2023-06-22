import { useEffect, useState } from "react";
import { fetchPopular } from "../services/api";
import type { PopularResultsT } from "../types/types";

export const Home = () => {
  const [filmList, setFilmList] = useState<PopularResultsT[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchPopular();
      console.log(data);
      setFilmList(data.results);
    })();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {filmList.map((film) => (
          <li key={film.id}>
            <p>{film.original_title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
