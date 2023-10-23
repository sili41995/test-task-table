import pagesPath from 'constants/pagesPath';

const getAuthPages = () => {
  const { homePath, loginPath } = pagesPath;

  return [homePath, `/${loginPath}`];
};

export default getAuthPages;
