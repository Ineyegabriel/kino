import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import { CancelFactorySettingsOnUnorderedList } from '@/utils/mixins';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const TopicsContainer = styled.section`
  display: flex;
  max-width: 1024px;
  margin: auto;
  gap: ${StaticSpacing.MD};
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem 0;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${StaticSpacing.MD};
  flex-wrap: wrap;
`;

export const DirectorsContainer = styled.div`
  display: flex;
  gap: ${StaticSpacing.MD};
  flex-wrap: wrap;
  flex-direction: column-reverse;
`;

export const SectionTitle = styled(Typography).attrs({ variant: 'body1' })`
  margin-bottom: ${StaticSpacing.XS};
  border-bottom: 1px solid ${Colors.Grey400};
  font-weight: 500;
`;

export const SectionCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  gap: ${StaticSpacing.MD};
`;

export const ScoreList = styled.ul`
  ${CancelFactorySettingsOnUnorderedList};
  display: flex;
  gap: ${StaticSpacing.SM};
  align-items: center;
  padding: 3rem;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      &:first-child {
        font-size: xx-large;
      }
    }
  }
`;
