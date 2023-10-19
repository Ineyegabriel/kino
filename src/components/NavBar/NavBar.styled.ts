import { Colors } from '@/assets/Colors';
import { StaticSpacing } from '@/assets/StaticSpacing';
import styled from 'styled-components';

export const Header = styled.header`
  height: 3rem;
  width: 100%;
  background-color: black;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: ${StaticSpacing.SM};
  a {
    text-decoration: none;
    color: ${Colors.White};
    border-radius: 34px;
    padding: ${StaticSpacing.XS} 12px;
    &:hover {
      background-color: ${Colors.LightBlack1};
      color: ${Colors.White};
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
