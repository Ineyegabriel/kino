import { FunctionComponent } from 'react';
import { SectionCard, SectionTitle } from '../MoviesTopicsSection.styled';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type ActorsListProps = {
  Actors: string;
};
const ActorsCard = styled(SectionCard)`
  min-width: 50%;
`;
const ActorsList: FunctionComponent<ActorsListProps> = ({ Actors }) => {
  const { t } = useTranslation();
  return (
    <ActorsCard elevation={3}>
      <div>
        <SectionTitle>{t('global:moviedetailspage.staring')}</SectionTitle>
        <Typography>{Actors}</Typography>
      </div>
    </ActorsCard>
  );
};

export default ActorsList;
