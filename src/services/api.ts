import { FetchFilmsType, PopularResultsT, MovieDetailsT } from "../types/types";

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
export const fetchDetails = async (id: number): Promise<MovieDetailsT> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/movie/${id}?language=en-US&page=1&query=${id}&${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: MovieDetailsT= await response.json();
    return data;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};

// https://api.themoviedb.org/3/movie/298618?language=en-US

// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1
