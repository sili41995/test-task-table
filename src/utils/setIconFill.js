import iconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setIconFill({ btnType }) {
  switch (btnType) {
    case iconBtnType.toggleShowPassword:
      return theme.colors.primaryColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
