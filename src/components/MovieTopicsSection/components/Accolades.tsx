import { FunctionComponent } from 'react';
import { SectionCard, SectionTitle } from '../MoviesTopicsSection.styled';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

type AccoladesProps = {
  Rated: string;
  Runtime: string;
  Language: string;
  Country: string;
  DVD: string;
  BoxOffice: string;
};

const AccoladesCard = styled(SectionCard)`
  width: 348px;
`;

const Accolades: FunctionComponent<AccoladesProps> = ({
  Rated = 'N/A',
  Runtime = 'N/A',
  Language = 'N/A',
  Country = 'N/A',
  DVD = 'N/A',
  BoxOffice = 'N/A',
}) => {
  const { t } = useTranslation();
  return (
    <AccoladesCard elevation={3}>
      <div>
        <SectionTitle>{t('global:moviedetailspage.runtime')}</SectionTitle>
        <Typography>{Runtime}</Typography>
      </div>
      <div>
        <SectionTitle>{t('global:moviedetailspage.boxOfficeEarnings')}</SectionTitle>
        <Typography>{BoxOffice}</Typography>
      </div>
      <div>
        <SectionTitle>{t('global:moviedetailspage.dvd')}</SectionTitle>
        <Typography>{DVD}</Typography>
      </div>

      <div>
        <SectionTitle>{t('global:moviedetailspage.country')}</SectionTitle>
        <Typography>{Country}</Typography>
      </div>
      <div>
        <SectionTitle>{t('global:moviedetailspage.language')}</SectionTitle>
        <Typography>{Language}</Typography>
      </div>
      <div>
        <SectionTitle>{t('global:moviedetailspage.rated')}</SectionTitle>
        <Typography>{Rated}</Typography>
      </div>
    </AccoladesCard>
  );
};

export default Accolades;
