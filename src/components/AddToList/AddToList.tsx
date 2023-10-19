import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { AddToListButton } from '../MovieBannerContent/MovieBannerContent.styled';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AddToListInput, CreateListButton, InputWrapper, ModalBoxStyle } from './AddToList.styled';
import useLocalStorage from '@/hooks/useLocalStorage';

import { useParams, useSearchParams } from 'react-router-dom';
import { LOCAL_STORAGE_KEY, UrlParamsRecord } from '@/utils/constant';
import { processLocalStateData } from './utils';
import { WatchListData } from '@/types/movies';
import WatchList from './WatchList';
import { useTranslation } from 'react-i18next';

const AddToList: FunctionComponent<{ moviePosterUrl: string; movieTitle: string }> = ({
  moviePosterUrl,
  movieTitle,
}) => {
  const { t } = useTranslation();
  const { movieID } = useParams();
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [textInput, setTextInput] = useState<string>();
  const [kinoWatchList, setKinoWatchList] = useLocalStorage(LOCAL_STORAGE_KEY);

  const [searchParams] = useSearchParams();
  const addToPlaylist = searchParams.get(UrlParamsRecord.ADD_TO_LIST) || '';

  const watchListsCollection = JSON.parse(kinoWatchList);
  const showWatchList = Boolean(kinoWatchList);
  useEffect(() => {
    if (addToPlaylist === 'no') {
      setDisabled(true);
    }
  }, [addToPlaylist]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const textBoxChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setTextInput(value);
  };

  const preparedListData: WatchListData = {
    [textInput!]: [
      {
        movieId: movieID,
        moviePoster: moviePosterUrl,
        movieTitle,
      },
    ],
  };

  const createListHandler = () => {
    if (textInput === undefined) return;
    processLocalStateData(preparedListData, textInput!, kinoWatchList, setKinoWatchList);
    handleClose();
    setDisabled(true);
  };

  return (
    <div>
      <AddToListButton variant="contained" onClick={handleOpen} endIcon={<AddIcon />} disabled={disabled}>
        {t('global:moviedetailspage.addToList')}
      </AddToListButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalBoxStyle}>
          <InputWrapper>
            <AddToListInput id="create-list" variant="outlined" onChange={textBoxChangeHandler} />
            <CreateListButton variant="contained" onClick={createListHandler}>
              {t('global:moviedetailspage.createList')}
            </CreateListButton>
          </InputWrapper>
          {showWatchList && (
            <WatchList
              watchListRecord={watchListsCollection}
              kinoWatchList={kinoWatchList}
              setKinoWatchList={setKinoWatchList}
              title={movieTitle}
              poster={moviePosterUrl}
              closeModal={handleClose}
              setDisabled={setDisabled}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default AddToList;
