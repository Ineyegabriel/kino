export enum PROJECT_API {
  MOVIE_SOURCE = 'https://www.omdbapi.com/',
}

export enum UrlParamsRecord {
  TITLE = 'title',
  MOVIE_THROUGH_STATE = 'movieThroughState',
  ADD_TO_LIST = 'addtolist',
}

export const LOCAL_STORAGE_KEY = 'kinoWatchList';

export const fallbackwatchlist =
  '{"My Watch List":[{"movieId":"tt0068646","moviePoster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","movieTitle":"The Godfather"}]}';
