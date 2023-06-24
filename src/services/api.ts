import {
  FetchFilmsType,
  PopularResultsT,
  MovieDetailsT,
  CastFetchT,
  ActorT,
  ReviewT,
  ReviewsFetchT,
} from "../types/types";

const API_KEY = "api_key=80b0760fd4c0a90f68de639a2aacad9a";
const API_ADDRESS = "https://api.themoviedb.org/3";

export const fetchPopular = async (): Promise<
  FetchFilmsType<PopularResultsT>
> => {
  try {
    const response = await fetch(
      API_ADDRESS + "/trending/movie/week?language=en-US&" + API_KEY
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: FetchFilmsType<PopularResultsT> = await response.json();
    return data;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};

export const fetchByName = async (
  name: string
): Promise<FetchFilmsType<PopularResultsT>> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/search/movie?&include_adult=false&language=en-US&page=1&query=${name}&${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: FetchFilmsType<PopularResultsT> = await response.json();
    return data;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};
export const fetchDetails = async (id: string): Promise<MovieDetailsT> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/movie/${id}?language=en-US&page=1&query=${id}&${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: MovieDetailsT = await response.json();
    return data;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};

export const fetchCast = async (id: string): Promise<ActorT[]> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/movie/${id}/credits?language=en-US&${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: CastFetchT = await response.json();
    return data.cast;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};

export const fetchReviews = async (id: string): Promise<ReviewT[]> => {
  try {
    console.log(`${API_ADDRESS}/movie/${id}/reviews?language=en-US&${API_KEY}`);

    const response = await fetch(
      `${API_ADDRESS}/movie/${id}/reviews?language=en-US&${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: ReviewsFetchT = await response.json();
    return data.results;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};
// https://api.themoviedb.org/3/movie/298618?language=en-US

// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1
