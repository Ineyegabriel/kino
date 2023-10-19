import { Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { SectionCard, SectionTitle } from '../MoviesTopicsSection.styled';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type DirectorNWritersProps = {
  Director: string;
  Writer: string;
};

const DirectorCard = styled(SectionCard)`
  min-width: 50%;
`;
const DirectorNWriters: FunctionComponent<DirectorNWritersProps> = ({ Director, Writer }) => {
  const { t } = useTranslation();
  return (
    <DirectorCard elevation={3}>
      <div>
        <SectionTitle>{t('global:moviedetailspage.directors')}</SectionTitle>
        <Typography>{Director}</Typography>
      </div>
      <div>
        <SectionTitle>{t('global:moviedetailspage.writers')}</SectionTitle>
        <Typography>{Writer}</Typography>
      </div>
    </DirectorCard>
  );
};

export default DirectorNWriters;
