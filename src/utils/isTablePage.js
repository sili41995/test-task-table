import pagesPath from 'constants/pagesPath';

const isTablePage = (path) => path.includes(pagesPath.tablePath);

export default isTablePage;
