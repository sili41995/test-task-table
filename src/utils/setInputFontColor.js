import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
