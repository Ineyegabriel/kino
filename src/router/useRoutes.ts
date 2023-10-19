import useLocalStorage from '@/hooks/useLocalStorage';
import { LOCAL_STORAGE_KEY } from '@/utils/constant';

export type RoutesConfig = {
  label: string;
  location: string;
}[];

const Routes: RoutesConfig = [
  {
    label: 'global:routes.home',
    location: '/home',
  },
  {
    label: 'global:routes.browse',
    location: '/browse',
  },
];

const useRoutes = () => {
  const [kinoWatchList] = useLocalStorage(LOCAL_STORAGE_KEY);

  if (kinoWatchList) {
    Routes.push({
      label: 'global:routes.history',
      location: '/history',
    });
  }
  return Routes;
};

export default useRoutes;
