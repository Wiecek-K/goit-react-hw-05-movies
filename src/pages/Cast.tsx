import { useEffect, useState } from "react";
import { fetchCast } from "../services/api";
import type { ActorT } from "../types/types";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css";

export const Cast = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [cast, setCast] = useState<ActorT[]>([]);
  useEffect(() => {
    if (filmId) {
      (async () => {
        const data = await fetchCast(filmId);
        setCast(data);
      })();
    }
  }, [filmId]);

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            className={css.profile}
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          />
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </li>
      ))}
    </ul>
  );
};
