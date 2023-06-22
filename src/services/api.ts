import { FetchFilmsType } from "../types/types";

const API_KEY = "?api_key=964358699754c21d74c014b561cf196c";
const API_ADDRESS = "https://api.themoviedb.org/3/movie/popular";

export const fetchPopular = async (): Promise<FetchFilmsType> => {
  try {
    console.log(API_ADDRESS + API_KEY);

    const response = await fetch(API_ADDRESS + API_KEY);
    if (!response.ok) {
      throw new Error("Błąd sieciowy - " + response.status);
    }
    const data: FetchFilmsType = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    throw error;
  }
};
