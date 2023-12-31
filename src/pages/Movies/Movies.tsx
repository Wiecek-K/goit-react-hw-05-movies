import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { fetchByName } from "../../services/api";
import type { IPopularResults } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

export const Movies = () => {
  const [filmList, setFilmList] = useState<IPopularResults[]>([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    if (query) {
      setInputValue(query);
      (async () => {
        const data = await fetchByName(query);
        setFilmList(data.results);
      })();
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`?query=${inputValue}`);
    (async () => {
      const data = await fetchByName(inputValue);
      setFilmList(data.results);
    })();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Wprowadź tekst"
          name="searchValue"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {filmList.map((film) => (
          <li key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: `/movies/?query=${inputValue}` }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
