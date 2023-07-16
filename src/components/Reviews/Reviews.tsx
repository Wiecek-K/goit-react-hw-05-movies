import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";
import type { IReview } from "../../types/types";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [reviews, setReviews] = useState<IReview[]>([]);
  useEffect(() => {
    if (filmId) {
      (async () => {
        const data = await fetchReviews(filmId);
        setReviews(data);
      })();
    }
  }, [filmId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <p>{`Author: ${author}`}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
