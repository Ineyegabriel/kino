import { FunctionComponent } from 'react';
import {
  BannerInfoWrapper,
  GenreList,
  GenreReleaseDateRow,
  MovieTitle,
  Overview,
  ReleaseDate,
  SectionTitle,
} from './MovieBannerContent.styled';
import { splitAtComma } from '@/utils/helpers';
import AddToList from '../AddToList/AddToList';
import { useTranslation } from 'react-i18next';

type MovieBannerContentProps = {
  Plot: string;
  Title: string;
  Released: string;
  Genre: string;
  Poster: string;
};

const MovieBannerContent: FunctionComponent<MovieBannerContentProps> = ({
  Plot = '',
  Title = '',
  Released = '',
  Genre = '',
  Poster = '',
}) => {
  const genresArray = splitAtComma(Genre);
  const { t } = useTranslation();
  return (
    <>
      <BannerInfoWrapper>
        <div>
          <MovieTitle>{Title}</MovieTitle>
          <GenreReleaseDateRow>
            <GenreList>
              {genresArray.map((genre) => (
                <li key={`${genre}-item`}>
                  <span>{genre}</span>
                </li>
              ))}
            </GenreList>
            <ReleaseDate>{Released}</ReleaseDate>
          </GenreReleaseDateRow>
        </div>

        <div>
          <SectionTitle>{t('global:moviedetailspage.plot')}</SectionTitle>
          <Overview>{Plot}</Overview>
        </div>
        <div>
          <AddToList moviePosterUrl={Poster} movieTitle={Title} />
        </div>
      </BannerInfoWrapper>
    </>
  );
};

export default MovieBannerContent;
