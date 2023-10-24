import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputBorderColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
