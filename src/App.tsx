import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { RootStoreProvider } from './context/StoreContext';
import RootStore from './stores';

function App(store: RootStore) {
  return (
    <RootStoreProvider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RootStoreProvider>
  );
}

export default App;
