import IconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setButtonColor({ btnType }: { btnType: IconBtnType }) {
  switch (btnType) {
    case IconBtnType.toggleShowPassword:
      return 'transparent';

    case IconBtnType.accept:
      return theme.colors.greenBtnColor;

    case IconBtnType.cancel:
      return theme.colors.redBtnColor;

    case IconBtnType.logout:
      return theme.colors.redBtnColor;

    case IconBtnType.clearFilter:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
