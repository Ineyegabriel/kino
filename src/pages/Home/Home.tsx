import { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UrlParamsRecord } from '@/utils/constant';
import { useRootStore } from '@/hooks/useRootStore';
import MovieCard from '@/components/MovieCard/Card';
import {
  StyledPaper,
  StyledInputBase,
  SearchInputArea,
  SearchInputContainer,
  StyledBannerMessage,
  ContentContainer,
} from './Home.styled';
import { observer } from 'mobx-react';

const Home: FunctionComponent = observer(() => {
  const { t } = useTranslation();
  const {
    moviesStore: { fetchMovies, movieError, setError, movie },
  } = useRootStore();

  const { Poster, Title, Year, Runtime, Type, imdbID } = movie;

  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchValue = searchParams.get(UrlParamsRecord.TITLE) || '';
  const [inputValue, setInputValue] = useState<string>(decodeURIComponent(urlSearchValue));
  const navigate = useNavigate();

  const fetchMovie = () => {
    fetchMovies(urlSearchValue);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMovies(urlSearchValue);
  };

  const keyUpChangeHandler = () => {
    if (urlSearchValue.trim().length === 0) return navigate('/');
  };

  const keyDownChangeHandle = () => {};

  const searchInputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setError(false);
    setInputValue(value);
    setSearchParams({ title: encodeURIComponent(value) });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (urlSearchValue.length === 0) return;
      fetchMovies(urlSearchValue);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearchValue]);
  const bannerMessage: string = movieError ? 'global:error.movieNotFound' : 'global:homepage.headerTitle';
  return (
    <ContentContainer>
      <SearchInputArea>
        <SearchInputContainer>
          <StyledBannerMessage>{t(bannerMessage)}</StyledBannerMessage>
          <StyledPaper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            onSubmit={handleFormSubmit}
          >
            <StyledInputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={t('global:homepage.searchBarPlaceHolder')}
              inputProps={{ 'aria-label': 'search movie' }}
              onChange={searchInputChangeHandler}
              onKeyUp={keyUpChangeHandler}
              onKeyDown={keyDownChangeHandle}
              value={inputValue}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={fetchMovie}>
              <SearchIcon />
            </IconButton>
          </StyledPaper>
        </SearchInputContainer>
      </SearchInputArea>
      <section>
        <MovieCard Poster={Poster} Title={Title} Year={Year} Runtime={Runtime} Type={Type} imdbID={imdbID} />
      </section>
    </ContentContainer>
  );
});

export default Home;
