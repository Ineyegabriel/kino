import MoviesStore from './moviesStore';
import WatchListStore from './watchListStore';

export default class RootStore {
  public moviesStore: MoviesStore;
  public watchListStore: WatchListStore;

  constructor() {
    this.moviesStore = new MoviesStore();
    this.watchListStore = new WatchListStore();
  }
}
