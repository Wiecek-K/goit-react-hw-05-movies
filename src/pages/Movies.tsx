import { useState, ChangeEvent, FormEvent } from "react";
import { fetchByName } from "../services/api";
import type { PopularResultsT } from "../types/types";
import { Link } from "react-router-dom";

export const Movies = () => {
  const [filmList, setFilmList] = useState<PopularResultsT[]>([]);
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    (async () => {
      const data = await fetchByName(query);
      setFilmList(data.results);
    })();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Wprowadź tekst"
          name="searchValue"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {filmList.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
