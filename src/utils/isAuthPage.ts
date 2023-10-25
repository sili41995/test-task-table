import { getAuthPages } from 'utils';

const isAuthPage = (path: string) => getAuthPages().includes(path);

export default isAuthPage;
