/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { WatchList } from '@/stores/watchListStore';
import { WatchListData } from '@/types/movies';
import { useParams } from 'react-router-dom';
import { processLocalStateData } from './utils';
import { useTranslation } from 'react-i18next';

type WatchListProps = {
  watchListRecord: WatchList;
  kinoWatchList: any;
  setKinoWatchList: any;
  title: string;
  poster: string;
  closeModal: () => void;
  setDisabled: (value: boolean) => void;
};

type ListObj = {
  [x: string]: boolean;
};

const GroupedWatchList: FunctionComponent<WatchListProps> = ({
  watchListRecord,
  poster,
  title,
  kinoWatchList,
  setKinoWatchList,
  closeModal,
  setDisabled,
}) => {
  const { t } = useTranslation();
  const watchListEntries = Object.keys(watchListRecord);
  const listNames: ListObj = Object.create(null);
  for (const name of watchListEntries) {
    listNames[name!] = false;
  }
  const [state, setState] = useState(listNames);
  const { movieID } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

    const preparedListData: WatchListData = {
      [event.target.name]: [
        {
          movieId: movieID,
          moviePoster: poster,
          movieTitle: title,
        },
      ],
    };
    processLocalStateData(preparedListData, event.target.name, kinoWatchList, setKinoWatchList);
    closeModal();
    setDisabled(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend"> {t('global:moviedetailspage.saveMovieTo')}.</FormLabel>
        <FormGroup>
          {watchListEntries.map((list) => (
            <FormControlLabel
              key={`${list}-checkbBox`}
              control={<Checkbox checked={state[list]} onChange={handleChange} name={list} />}
              label={list}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default GroupedWatchList;
