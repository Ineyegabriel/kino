import { makeObservable, observable, runInAction } from 'mobx';

import * as api from '@/api/movies.api';

import { Movie } from '@/types/movies';
import { ApiPlotRecord, QueryPayload } from '@/utils/helpers';

const OMDB_API_KEY = String(import.meta.env.VITE_OMDB_API_KEY);

export default class MoviesStore {
  public isLoading: boolean;
  public movie: Movie;
  public movieError: boolean;

  constructor() {
    makeObservable(this, {
      movie: observable.ref,
      isLoading: observable.ref,
      movieError: observable.ref,
    });

    this.movie = {} as Movie;
    this.isLoading = false;
    this.movieError = false;
  }

  setLoading = (isFetching: boolean): void => {
    runInAction(() => {
      this.isLoading = isFetching;
    });
  };

  setError = (errorState: boolean): void => {
    runInAction(() => {
      this.movieError = errorState;
    });
  };

  setMovie = (movie: Movie): void => {
    runInAction(() => {
      this.movie = movie;
    });
  };

  fetchMovies = async (movieTitle: string): Promise<void> => {
    this.setLoading(true);

    const queryParams: QueryPayload = {
      apikey: OMDB_API_KEY,
      t: movieTitle,
      plot: ApiPlotRecord.full,
    };

    const res = await api.fetchMovieApiCall(queryParams);

    if (!res.data.Error) {
      this.setMovie(res.data);
    }

    if (res.data.Response === 'False') {
      this.setMovie({} as Movie);
      this.setError(true);
    }

    this.setLoading(false);
  };

  fetchMoviesById = async (movieID: string): Promise<void> => {
    this.setLoading(true);

    const queryParams: QueryPayload = {
      apikey: OMDB_API_KEY,
      i: movieID,
    };

    const res = await api.fetchMovieApiCall(queryParams);

    if (!res.data.Error) {
      this.setMovie(res.data);
    }

    if (res.data.Response === 'False') {
      this.setMovie({} as Movie);
      this.setError(true);
    }

    this.setLoading(false);
  };
}
