import { createContext, FunctionComponent, PropsWithChildren } from 'react';
import RootStore from '@/stores';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider: FunctionComponent<PropsWithChildren<{ store: RootStore }>> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
