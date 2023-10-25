import { FormType } from 'constants/formType';

const setInputHeight = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return '100%';

    case FormType.authForm:
      return '60px';

    case FormType.itemForm:
      return '40px';

    default:
      return '50px';
  }
};

export default setInputHeight;
