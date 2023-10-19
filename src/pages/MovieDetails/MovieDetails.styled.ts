import { StaticSpacing } from '@/assets/StaticSpacing';
import styled from 'styled-components';
import { ContentContainer } from '../Home/Home.styled';
import { Colors } from '@/assets/Colors';
import { IconButton } from '@mui/material';

export const BackButton = styled(IconButton)`
  position: absolute;
  left: 16px;
  top: 55px;
  color: ${Colors.White};
  display: flex;
  gap: ${StaticSpacing.XS};
`;
export const Page = styled.div`
  background-color: ${Colors.Grey200};
`;

export const PosterBannerContainer = styled.section<{ imgSrc: string }>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 35%;
  .custom_bg {
    background-image: linear-gradient(
      to left,
      rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
      rgba(31.5, 31.5, 31.5, 0.84) 50%,
      rgba(31.5, 31.5, 31.5, 0.84) 100%
    );
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .single_column {
    min-height: 500px;
    display: flex;
    justify-content: center;
  }
`;

export const MovieBannerInfoContainer = styled(ContentContainer)`
  display: flex;
  gap: ${StaticSpacing.XL};
  padding: 3rem 0;
`;

export const MoviePoster = styled.img`
  border-radius: ${StaticSpacing.XS};
`;
