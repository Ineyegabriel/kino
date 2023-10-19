import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import { Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const HistoryPageContainer = styled.section`
  display: flex;
  max-width: 1024px;
  margin: auto;
  padding-top: ${StaticSpacing.SM};
  gap: ${StaticSpacing.XL};
`;
export const Aside = styled.aside`
  height: 100vh;
  flex-grow: 1;
  max-width: 250px;
  padding: 0 ${StaticSpacing.SM};
`;
export const Main = styled.main`
  height: 100vh;
  flex-grow: 4;
`;

export const SideMenuCard = styled(Paper)`
  min-height: 350px;
  max-width: 300px;
  padding: 18px;
`;

export const StyledMenuHeader = styled(Typography).attrs({ variant: 'h5' })`
  margin-bottom: ${StaticSpacing.XS};
  padding-left: ${StaticSpacing.XS};
`;

export const StyledMenuButton = styled(Button)`
  width: 100%;
  justify-content: flex-start;
  color: black;
  text-align: left;
`;
export const StyleViewingHeading = styled(Typography).attrs({ variant: 'h4' })`
  margin-bottom: ${StaticSpacing.MD};
  padding: 7px 0 14px 16px;
  border-bottom: 1px solid ${Colors.Grey400};
  color: ${Colors.White};
  font-weight: 600;
  display: flex;
  align-items: center;
`;
