import iconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setButtonColor({ btnType }) {
  switch (btnType) {
    case iconBtnType.toggleShowPassword:
      return 'transparent';

    case iconBtnType.accept:
      return theme.colors.greenBtnColor;

    case iconBtnType.cancel:
      return theme.colors.redBtnColor;

    case iconBtnType.logout:
      return theme.colors.redBtnColor;

    case iconBtnType.clearFilter:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
