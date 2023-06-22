export interface FetchFilmsType {
  page: number;
  results: PopularResultsT[];
  total_pages: number;
  total_results: number;
}
export interface PopularResultsT {
  original_title: string;
  id: number;
}
