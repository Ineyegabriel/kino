import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  MovieCardItem,
  PosterImage,
  MovieInfoContainer,
  TypeContainer,
  SearchResultTitle,
  PosterImageSkeleton,
  MovieInfoSection,
} from './Card.styled';
import { excludeNA } from '@/utils/helpers';
import { Typography } from '@mui/material';

type MovieCardProps = {
  showSubInfo?: boolean;
  Poster: string;
  Title: string;
  Year?: string;
  Runtime?: string;
  Type?: string;
  imdbID: string;
  externalParam?: boolean;
};

const MovieCard: FunctionComponent<MovieCardProps> = ({
  showSubInfo = true,
  Poster,
  Title,
  Year = '',
  Runtime = '',
  Type = '',
  imdbID,
  externalParam,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {imdbID && (
        <>
          {showSubInfo && <SearchResultTitle>{t('global:searchResult', { Title })}</SearchResultTitle>}
          <MovieCardItem>
            <Link to={`/movie/${imdbID}${externalParam ? `?addtolist=no` : ''}`}>
              {Poster === 'N/A' ? (
                <PosterImageSkeleton />
              ) : (
                <PosterImage src={Poster} alt={`${Title} poster image`} loading="lazy" />
              )}

              <MovieInfoSection>
                <Typography variant="body2" fontSize="1.2rem">
                  {Title}
                </Typography>
                {showSubInfo && (
                  <MovieInfoContainer>
                    <li>
                      <span>{excludeNA(Year)}</span>
                      <span>{excludeNA(Runtime)}</span>
                      <TypeContainer>{excludeNA(Type)}</TypeContainer>
                    </li>
                  </MovieInfoContainer>
                )}
              </MovieInfoSection>
            </Link>
          </MovieCardItem>
        </>
      )}
    </>
  );
};

export default MovieCard;
