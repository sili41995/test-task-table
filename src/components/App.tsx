import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import NotFoundPage from 'pages/NotFoundPage';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import TablePage from 'pages/TablePage';
import { PagesPath } from 'constants/pagesPath';

const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const EditItemPage = lazy(() => import('pages/EditItemPage'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={PagesPath.loginPath}
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route path={PagesPath.aboutPath} element={<AboutPage />} />
          <Route
            path={PagesPath.tablePath}
            element={<PrivateRoute element={<TablePage />} />}
          />
          <Route
            path={`${PagesPath.tablePath}/:${PagesPath.dynamicParam}`}
            element={<EditItemPage />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;
