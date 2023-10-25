import IconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

function setIconFill({ btnType }: { btnType: IconBtnType }) {
  switch (btnType) {
    case IconBtnType.toggleShowPassword:
      return theme.colors.primaryColor;

    case IconBtnType.accept:
      return theme.colors.greenIconColor;

    case IconBtnType.cancel:
      return theme.colors.redIconColor;

    case IconBtnType.logout:
      return theme.colors.redIconColor;

    case IconBtnType.clearFilter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
