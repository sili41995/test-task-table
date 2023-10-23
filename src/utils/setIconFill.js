import iconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setIconFill({ btnType }) {
  switch (btnType) {
    case iconBtnType.toggleShowPassword:
      return theme.colors.primaryColor;

    case iconBtnType.accept:
      return theme.colors.greenIconColor;

    case iconBtnType.cancel:
      return theme.colors.redIconColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
