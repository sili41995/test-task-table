import iconBtnType from 'constants/iconBtnType';
import theme from 'constants/theme';

const setIconHoverEffect = (btnType) => {
  switch (btnType) {
    case iconBtnType.clearFilter:
      return;

    default:
      return theme.colors.secondaryColor;
  }
};

export default setIconHoverEffect;
