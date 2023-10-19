import { FunctionComponent } from 'react';
import { ScoreList, SectionCard } from '../MoviesTopicsSection.styled';
import { Rating } from '@/types/movies';

type MovieScores = {
  MovieScores: Rating[];
};
const MovieScores: FunctionComponent<MovieScores> = ({ MovieScores = [] }) => {
  return (
    <SectionCard elevation={3}>
      <ScoreList>
        {MovieScores.map(({ Source, Value }) => (
          <li key={`${Value}-score-item`}>
            <span>{Value}</span>
            <span>{Source}</span>
          </li>
        ))}
      </ScoreList>
    </SectionCard>
  );
};

export default MovieScores;
