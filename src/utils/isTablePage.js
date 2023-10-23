import pagesPath from 'constants/pagesPath';

const isContactsPage = (path) => path.includes(pagesPath.tablePath);

export default isContactsPage;
