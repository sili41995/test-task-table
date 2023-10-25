import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import { PagesPath } from 'constants/pagesPath';

const PublicLinks = () => {
  const loginPagePath = `/${PagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={loginPagePath}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
