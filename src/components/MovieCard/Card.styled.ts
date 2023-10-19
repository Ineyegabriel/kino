import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import { CancelFactorySettingsOnUnorderedList } from '@/utils/mixins';
import { Skeleton, Typography } from '@mui/material';
import styled from 'styled-components';

export const MovieCardItem = styled.article`
  padding: ${StaticSpacing.SM};
  display: inline-block;
  border-radius: ${StaticSpacing.XS};
  max-width: 200px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.LightBlack2};
    transition: background-color 0.5s ease-in-out;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const PosterImageSkeleton = styled(Skeleton).attrs({ variant: 'rectangular', width: '100%', height: 280 })`
  border-radius: ${StaticSpacing.XXS};
  margin-bottom: ${StaticSpacing.SM};
`;

export const PosterImage = styled.img`
  border-radius: ${StaticSpacing.XXS};
  border-width: 0;
  width: 100%;
  margin-bottom: ${StaticSpacing.SM};
  box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

export const SearchResultTitle = styled(Typography)`
  border-bottom: 1px solid ${Colors.Grey400};
  margin-bottom: ${StaticSpacing.MD};
  font-weight: bold;
  color: ${Colors.White};
  font-size: ${StaticSpacing.MD};
`;

export const MovieInfoSection = styled.section`
  * {
    color: ${Colors.White};
  }
`;
export const MovieInfoContainer = styled.ul`
  ${CancelFactorySettingsOnUnorderedList};
  gap: ${StaticSpacing.XS};
  li {
    list-style: none;
    display: flex;
    width: 100%;
    gap: ${StaticSpacing.SM};
    align-items: center;
    justify-content: space-between;
    text-transform: capitalize;
  }
`;

export const TypeContainer = styled.span`
  border: 1px solid ${Colors.Grey500};
  border-radius: ${StaticSpacing.XS};
  padding: 4px;
`;
