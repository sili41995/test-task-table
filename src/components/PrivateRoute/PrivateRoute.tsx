import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { IProps } from './PrivateRoute.types';
import { PagesPath } from 'constants/pagesPath';
import { useAppSelector } from 'hooks/redux';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
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
