import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import PublicLinks from 'components/PublicLinks';
import PrivateLinks from 'components/PrivateLinks';
import { PagesPath } from 'constants/pagesPath';
import { useAppSelector } from 'hooks/redux';

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const tablePagePath = `/${PagesPath.tablePath}`;
  const aboutPagePath = `/${PagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={tablePagePath}>Table</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={aboutPagePath}>About</NavLink>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;
