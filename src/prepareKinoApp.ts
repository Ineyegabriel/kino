import { Root } from 'react-dom/client';
import App from './App';
import RootStore from './stores';

export const prepareKinoApp = async (rootStore: RootStore, root: Root) => {
  root.render(App(rootStore));
};
