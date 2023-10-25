import { PagesPath } from 'constants/pagesPath';

const getAuthPages = () => {
  return [PagesPath.homePath, `/${PagesPath.loginPath}`];
};

export default getAuthPages;
