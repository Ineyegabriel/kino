import { FunctionComponent } from 'react';
import { BackButton, MovieBannerInfoContainer, MoviePoster, Page, PosterBannerContainer } from './MovieDetails.styled';
import { Link, useParams } from 'react-router-dom';
import { useRootStore } from '@/hooks/useRootStore';
import { observer } from 'mobx-react';
import MovieBannerContent from '@/components/MovieBannerContent/MovieBannerContent';
import MoviesTopicsSection from '@/components/MovieTopicsSection/MoviesTopicsSection';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Movie } from '@/types/movies';
import { useTranslation } from 'react-i18next';

const MovieDetails: FunctionComponent = observer(() => {
  const { movieID } = useParams();

  const {
    moviesStore: { movie, fetchMoviesById, setMovie },
  } = useRootStore();

  const { t } = useTranslation();

  const { Poster, Plot, Title, Released, Genre } = movie;
  const moviesFromStore = Object.keys(movie).length;

  moviesFromStore === 0 && fetchMoviesById(movieID!);

  const backButtonClickHandler = () => setMovie({} as Movie);
  return (
    <Page>
      <PosterBannerContainer imgSrc={Poster}>
        <div className="custom_bg">
          <div className="single_column">
            <Link to="/home">
              <BackButton type="button" sx={{ p: '10px' }} aria-label="back" onClick={backButtonClickHandler}>
                <ArrowBackIcon />
                {t('global:backToHome')}
              </BackButton>
            </Link>

            <MovieBannerInfoContainer>
              <MoviePoster src={Poster} />
              <MovieBannerContent Plot={Plot} Title={Title} Released={Released} Genre={Genre} Poster={Poster} />
            </MovieBannerInfoContainer>
          </div>
        </div>
      </PosterBannerContainer>
      <MoviesTopicsSection />
    </Page>
  );
});

export default MovieDetails;
