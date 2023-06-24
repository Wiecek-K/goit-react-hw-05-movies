export interface FetchFilmsType<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
}
export interface PopularResultsT {
  title: string;
  id: number;
}
export interface MovieDetailsT {
  title: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  genres: { name: string; id: number }[];
  vote_average: number;
  overview: string;
}
export interface CastFetchT {
  id: number;
  cast: ActorT[];
}
export interface ActorT {
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
export interface ReviewsFetchT {
  id: number;
  page: number;
  results: ReviewT[];
  total_pages: number;
  total_result: number;
}
export interface ReviewT {
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
