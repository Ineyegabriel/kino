import ReactDOM from 'react-dom/client';
import i18n from './i18n.ts';
import RootStore from './stores/index.ts';
import { prepareKinoApp } from './prepareKinoApp.ts';
import './index.css';
/**
 * Init and render the kino app along with language translations
 */
i18n.on('initialized', async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const rootStore = new RootStore();
  await prepareKinoApp(rootStore, root);
});
