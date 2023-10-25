import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import PublicLinks from 'components/PublicLinks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import PrivateLinks from 'components/PrivateLinks';
import { FC } from 'react';
import { PagesPath } from 'constants/pagesPath';

const Navigation: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
