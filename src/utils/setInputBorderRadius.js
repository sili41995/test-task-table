import theme from 'constants/theme';

const setInputBorderRadius = (inputType) => {
  switch (inputType) {
    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
