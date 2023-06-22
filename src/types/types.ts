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
