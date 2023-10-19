import { makeObservable, observable, runInAction } from 'mobx';

export type WatchList = {
  [key: string]: {
    movieId: string;
    moviePoster: string;
  }[];
};

export default class WatchListStore {
  public watchList: WatchList;

  constructor() {
    makeObservable(this, {
      watchList: observable.ref,
    });

    this.watchList = {};
  }

  saveNewItemToList = (key: string, value: WatchList) => {
    runInAction(
      () =>
        (this.watchList = {
          ...this.watchList,
          [key]: value,
        }),
    );
  };

  createList = (key: string) => {
    runInAction(
      () =>
        (this.watchList = {
          ...this.watchList,
          [key]: [],
        }),
    );
  };

  saveToLocalStorage = (key: string, value: WatchList) => {
    if (key in this.watchList) {
      this.saveNewItemToList(key, value);
    }
    this.createList(key);
    this.saveNewItemToList(key, value);
  };
}
