import { PROJECT_API } from '@/utils/constant';
import { QueryPayload, urlBuilder } from '@/utils/helpers';
import axios from 'axios';

export const fetchMovieApiCall = async (query: QueryPayload) => {
  try {
    const url = urlBuilder(PROJECT_API.MOVIE_SOURCE, query);
    return await axios.get(url);
  } catch (err) {
    throw new Error(`Failed to execute Http for ${err}`);
  }
};
