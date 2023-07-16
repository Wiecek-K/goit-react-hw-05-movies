import axios from "axios";

import {
  FetchFilmsType,
  IPopularResults,
  IMovieDetails,
  IActor,
  IReview,
} from "../types/types";

const API_KEY = "80b0760fd4c0a90f68de639a2aacad9a";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const params = {
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
};

export const fetchPopular = async (): Promise<
  FetchFilmsType<IPopularResults>
> => {
  {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data;
  }
};

export const fetchByName = async (
  name: string
): Promise<FetchFilmsType<IPopularResults>> => {
  const response = await axios.get(`/search/movie?query=${name}`, params);
  return response.data;
};
export const fetchDetails = async (id: string): Promise<IMovieDetails> => {
  const response = await axios.get(`/movie/${id}`, params);
  return response.data;
};

export const fetchCast = async (id: string): Promise<IActor[]> => {
  const response = await axios.get(`movie/${id}/credits?`, params);
  return response.data.cast;
};

export const fetchReviews = async (id: string): Promise<IReview[]> => {
  const response = await axios.get(`movie/${id}/reviews?`, params);
  return response.data.results;
};
// https://api.themoviedb.org/3/movie/298618?language=en-US

// https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1
