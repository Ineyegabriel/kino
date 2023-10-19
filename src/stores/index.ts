import MoviesStore from './moviesStore';

export default class RootStore {
  public moviesStore: MoviesStore;

  constructor() {
    this.moviesStore = new MoviesStore();
  }
}
