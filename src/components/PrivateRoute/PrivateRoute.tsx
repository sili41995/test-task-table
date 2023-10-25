import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { IProps } from './PrivateRoute.types';
import { PagesPath } from 'constants/pagesPath';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn;
  const path = `/${PagesPath.loginPath}`;

  return shouldRedirect ? (
    <Navigate to={path} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
