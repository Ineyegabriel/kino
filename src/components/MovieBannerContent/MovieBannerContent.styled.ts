import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import { CancelFactorySettingsOnUnorderedList, StyledPill } from '@/utils/mixins';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const BannerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${StaticSpacing.MD};
  justify-content: center;
`;
export const MovieTitle = styled(Typography).attrs({
  variant: 'h2',
  color: Colors.White,
  fontSize: '1.8rem',
  fontWeight: 600,
})`
  margin-bottom: ${StaticSpacing.SM};
  &::selection {
    background: transparent;
  }
`;

export const GenreReleaseDateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GenreList = styled.ul`
  ${CancelFactorySettingsOnUnorderedList}
  display: flex;
  gap: ${StaticSpacing.XS};
  li {
    list-style: none;
    color: black;
    span {
      background-color: ${Colors.Information100};
      align-items: center;
      background-color: #f1eaff;
      border-radius: 30px;
      display: inline-flex;
      position: relative;
      padding: 4px 12px;
    }
  }
`;
export const ReleaseDate = styled.span`
  ${StyledPill}
  background-color: ${Colors.Auxiliary1_300};
`;

export const Overview = styled(Typography).attrs({
  variant: 'body1',
  color: Colors.White,
})``;

export const SectionTitle = styled(Typography).attrs({
  variant: 'h6',
  color: Colors.White,
})`
  font-weight: 600;
`;

export const AddToListButton = styled(Button)`
  background-color: ${Colors.Auxiliary1_300};
  &:hover {
    background-color: ${Colors.Auxiliary1_500};
  }
`;
