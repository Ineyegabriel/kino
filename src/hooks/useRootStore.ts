import { StoreContext } from '@/context/StoreContext';
import RootStore from '@/stores';
import { useContext } from 'react';

export const useRootStore: () => RootStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};
