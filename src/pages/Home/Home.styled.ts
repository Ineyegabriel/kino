import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import { InputBase, Paper, Typography } from '@mui/material';
import { styled as mStyled } from '@mui/material/styles';
import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding-bottom: 3rem;
`;
export const SearchInputArea = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${StaticSpacing.XXL};
  padding: 3rem 0;
`;

export const SearchInputContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  padding: ${StaticSpacing.MD};
  gap: 3rem;
`;

export const StyledBannerMessage = styled(Typography).attrs({ variant: 'h4', align: 'center', fontWeight: 300 })`
  font-size: xxx-large;
  min-height: 60px;
  font-weight: 600;
  width: 700px;
  color: ${Colors.White};
  &::selection {
    background: transparent;
  }
`;

export const StyledInputBase = mStyled(InputBase)`
  .MuiInputBase-input {
    font-size: 2.5rem;
  }
`;
export const StyledPaper = mStyled(Paper)`
  && {
    .MuiPaper-elevation {
    }
  }
`;
