import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, StyledNavBar } from './NavBar.styled';
import useRoutes from '@/router/useRoutes';
import { useTranslation } from 'react-i18next';

const NavBar: FunctionComponent = () => {
  const Routes = useRoutes();
  const { t } = useTranslation();
  return (
    <Header>
      <StyledNavBar>
        {Routes.map(({ label, location }, index) => (
          <NavLink key={`${label}${index}-route`} to={location}>
            {t(label)}
          </NavLink>
        ))}
      </StyledNavBar>
    </Header>
  );
};

export default NavBar;
