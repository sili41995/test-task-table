import 'react-toastify/dist/ReactToastify.css';
import { FC } from 'react';
import { SlLogout } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/authSlice';
import { selectItems } from 'redux/table/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { isTablePage, toasts } from 'utils';
import IconButton from 'components/IconButton';
import Filter from 'components/Filter';
import { PagesPath } from 'constants/pagesPath';
import IconBtnType from 'constants/iconBtnType';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';

const PrivateLinks: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const items = useAppSelector(selectItems);

  const onLogoutBtnClick = () => {
    dispatch(logout());
    toasts.successToast('Goodbye!');
    navigate(PagesPath.homePath);
  };

  return (
    <LinkContainer>
      {isTablePage(location.pathname) && !!items.length && <Filter />}
      <IconButton
        btnType={IconBtnType.logout}
        iconSize={28}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <IconContainer>
          <SlLogout />
        </IconContainer>
        Logout
      </IconButton>
    </LinkContainer>
  );
};

export default PrivateLinks;
