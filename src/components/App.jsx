import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import NotFoundPage from 'pages/NotFoundPage';
import PublicRoute from 'components/PublicRoute';
import pagesPath from 'constants/pagesPath';
import PrivateRoute from 'components/PrivateRoute';
import TablePage from 'pages/TablePage';
import { useDispatch } from 'react-redux';
import { fetchItems } from 'redux/table/operations';
import PaginatedItems from './PaginatedItems';

const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const EditItemPage = lazy(() => import('pages/EditItemPage'));

const App = ({ itemsPerPage = 10 }) => {
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    console.log(itemOffset);
  });

  useEffect(() => {
    const promise = dispatch(fetchItems({ itemOffset, itemsPerPage }));

    return () => {
      promise.abort();
    };
  }, [dispatch, itemOffset, itemsPerPage]);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={pagesPath.loginPath}
            restricted
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route path={pagesPath.aboutPath} element={<AboutPage />} />
          <Route
            path={pagesPath.tablePath}
            element={
              <PrivateRoute
                element={
                  <>
                    <TablePage />
                    <PaginatedItems
                      itemsPerPage={itemsPerPage}
                      itemOffset={itemOffset}
                      setItemOffset={setItemOffset}
                    />
                  </>
                }
              />
            }
          />
          <Route
            path={`${pagesPath.tablePath}/:${pagesPath.dynamicParam}`}
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
