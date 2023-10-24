import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import PublicLinks from 'components/PublicLinks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import pagesPath from 'constants/pagesPath';
import PrivateLinks from 'components/PrivateLinks';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tablePagePath = `/${pagesPath.tablePath}`;
  const aboutPagePath = `/${pagesPath.aboutPath}`;

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
