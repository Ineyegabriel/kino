/* eslint-disable  @typescript-eslint/no-explicit-any */
import { WatchListData } from '@/types/movies';

export const processLocalStateData = (
  data: WatchListData,
  watchListKey: string,
  localStorageState: any,
  saveToLocalStorage: any,
) => {
  if (localStorageState === null) {
    saveToLocalStorage(JSON.stringify(data));
  }
  if (localStorageState !== null) {
    const decodedWatchList = JSON.parse(localStorageState);

    if (watchListKey in decodedWatchList) {
      const watchListIndex = decodedWatchList[watchListKey];

      const updatingWatchListIndex = [...watchListIndex, data[watchListKey][0]];
      const updatedWatchList = { ...decodedWatchList, [watchListKey]: updatingWatchListIndex };

      const stringifiedWatchList = JSON.stringify(updatedWatchList);
      saveToLocalStorage(stringifiedWatchList);
    }

    if (!(watchListKey in decodedWatchList)) {
      const newWatchlist = { ...decodedWatchList, ...data };
      const stringifiedNewWatchList = JSON.stringify(newWatchlist);
      saveToLocalStorage(stringifiedNewWatchList);
    }
  }
};
