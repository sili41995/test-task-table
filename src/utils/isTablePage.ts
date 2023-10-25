import { PagesPath } from 'constants/pagesPath';

const isTablePage = (path: string) => path.includes(PagesPath.tablePath);

export default isTablePage;
