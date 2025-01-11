import { apiOptions } from "../utils/apiOptions";

export const fetchMovieOrTvShowData = async (url) => {
  try {
    const response = await fetch(url, apiOptions('GET'));
    if (!response.ok) {
      const { status_message } = await response.json();
      throw new Error(`Error : ${response.status} , ${status_message}`);
    }
    const data = await response.json();
    return data?.results;
  }
  catch (error) {
    throw error;
  }
}