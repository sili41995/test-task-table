import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontSize = (inputType) => {
  switch (inputType) {
    case formType.authForm:
      return theme.fontSize.otherFontSize;

    default:
      return theme.fontSize.secondaryFontSize;
  }
};

export default setInputFontSize;
