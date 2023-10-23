import iconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setButtonColor({ btnType }) {
  switch (btnType) {
    case iconBtnType.toggleShowPassword:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
