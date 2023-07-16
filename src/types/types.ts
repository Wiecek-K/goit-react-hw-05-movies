export interface FetchFilmsType<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
}
export interface IPopularResults {
  title: string;
  id: number;
}
export interface IMovieDetails {
  title: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  genres: { name: string; id: number }[];
  vote_average: number;
  overview: string;
}
export interface ICastFetch {
  id: number;
  cast: IActor[];
}
export interface IActor {
  adult: false;
  gender: 1 | 2;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface IReviewsFetch {
  id: number;
  page: number;
  results: IReview[];
  total_pages: number;
  total_result: number;
}
export interface IReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
