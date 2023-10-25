import { FC, useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { toasts } from 'utils';
import { IProps } from './PublicRoute.types';
import { PagesPath } from 'constants/pagesPath';

const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
  const isFirstRenderRef = useRef(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const defaultGoBackPath = `/${PagesPath.tablePath}`;
  const goBackPath = location.state?.from ?? defaultGoBackPath;
  const isShowWarnToast =
    location.state && !isLoggedIn && isFirstRenderRef.current;

  useEffect(() => {
    isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
    isFirstRenderRef.current = false;
  }, [isShowWarnToast]);

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
