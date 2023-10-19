import { FunctionComponent } from 'react';
import DirectorNWriters from './components/DirectorNWriters';
import ActorsList from './components/ActorsList';
import MovieScores from './components/MovieScores';
import Accolades from './components/Accolades';
import { TopicsContainer, LeftSideContainer, DirectorsContainer } from './MoviesTopicsSection.styled';
import { observer } from 'mobx-react';
import { useRootStore } from '@/hooks/useRootStore';

const MoviesTopicsSection: FunctionComponent = observer(() => {
  const {
    moviesStore: { movie },
  } = useRootStore();
  const { Director, Writer, Actors, Ratings, Rated, Runtime, Language, Country, DVD, BoxOffice } = movie;
  return (
    <TopicsContainer>
      <LeftSideContainer>
        <DirectorsContainer>
          <DirectorNWriters Director={Director} Writer={Writer} />
          <ActorsList Actors={Actors} />
        </DirectorsContainer>
        <MovieScores MovieScores={Ratings} />
      </LeftSideContainer>
      <div>
        <Accolades
          Rated={Rated}
          Runtime={Runtime}
          Language={Language}
          Country={Country}
          DVD={DVD}
          BoxOffice={BoxOffice}
        />
      </div>
    </TopicsContainer>
  );
});

export default MoviesTopicsSection;
