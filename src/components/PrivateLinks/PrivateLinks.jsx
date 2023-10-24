import { SlLogout } from 'react-icons/sl';
import IconButton from 'components/IconButton';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { isTablePage, toasts } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import pagesPath from 'constants/pagesPath';
import iconBtnType from 'constants/iconBtnType';
import { logout } from 'redux/auth/authSlice';
import { selectItems } from 'redux/table/selectors';
import Filter from 'components/Filter';

const PrivateLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const items = useSelector(selectItems);

  const onLogoutBtnClick = () => {
    dispatch(logout());
    toasts.successToast('Goodbye!');
    navigate(pagesPath.homePath);
  };

  return (
    <LinkContainer>
      {isTablePage(location.pathname) && !!items.length && <Filter />}
      <IconButton
        btnType={iconBtnType.logout}
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
