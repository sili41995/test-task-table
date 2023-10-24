import { SlLogout } from 'react-icons/sl';
import IconButton from 'components/IconButton';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { toasts } from 'utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pagesPath from 'constants/pagesPath';
import iconBtnType from 'constants/iconBtnType';
import { logout } from 'redux/auth/authSlice';

const PrivateLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutBtnClick = () => {
    dispatch(logout());
    toasts.successToast('Goodbye!');
    navigate(pagesPath.homePath);
  };

  return (
    <LinkContainer>
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
