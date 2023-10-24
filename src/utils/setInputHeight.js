import formType from 'constants/formType';

const setInputHeight = (inputType) => {
  switch (inputType) {
    case formType.authForm:
      return '60px';

    case formType.itemForm:
      return '40px';

    default:
      return '50px';
  }
};

export default setInputHeight;
