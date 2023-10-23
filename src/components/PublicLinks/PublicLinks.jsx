import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import pagesPath from 'constants/pagesPath';

const PublicLinks = () => {
  const loginPagePath = `/${pagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={loginPagePath}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
