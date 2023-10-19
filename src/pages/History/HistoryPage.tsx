import { FunctionComponent, MouseEvent, useState } from 'react';
import {
  Aside,
  HistoryPageContainer,
  Main,
  SideMenuCard,
  StyleViewingHeading,
  StyledMenuButton,
  StyledMenuHeader,
} from './HistoryPage.styled';

import { LOCAL_STORAGE_KEY } from '@/utils/constant';
import useLocalStorage from '@/hooks/useLocalStorage';
import MovieCard from '@/components/MovieCard/Card';

type WatchListSelection = {
  movieId: string;
  moviePoster: string;
  movieTitle: string;
}[];

const HistoryPage: FunctionComponent = () => {
  const [kinoWatchList] = useLocalStorage(LOCAL_STORAGE_KEY);

  if (Boolean(kinoWatchList) === false) {
    window.location.assign('/home');
  }
  const decodeWatchLists = JSON.parse(kinoWatchList);
  const watchListEntries = Object.keys(decodeWatchLists);

  const [currentList, setCurrentList] = useState(watchListEntries[0]);

  const menuItemClick = (event: MouseEvent<HTMLButtonElement> | undefined) => {
    setCurrentList(event?.currentTarget.value as string);
  };
  const listSelection: WatchListSelection = decodeWatchLists[currentList];
  return (
    <HistoryPageContainer>
      <Aside>
        <SideMenuCard>
          <StyledMenuHeader>Watch Lists</StyledMenuHeader>
          {watchListEntries.map((item) => (
            <StyledMenuButton key={item} value={item} onClick={menuItemClick}>
              {item}
            </StyledMenuButton>
          ))}
        </SideMenuCard>
      </Aside>
      <Main>
        <section>
          <StyleViewingHeading>{currentList}</StyleViewingHeading>
          {listSelection.map(({ movieId, moviePoster, movieTitle }, index) => (
            <MovieCard
              key={`${movieTitle}-${index}-movieCard`}
              Poster={moviePoster}
              Title={movieTitle}
              imdbID={movieId}
              showSubInfo={false}
              externalParam={true}
            />
          ))}
        </section>
      </Main>
    </HistoryPageContainer>
  );
};

export default HistoryPage;
{
  /* <StyledMenuButton key={item}>{item}</StyledMenuButton> */
}
