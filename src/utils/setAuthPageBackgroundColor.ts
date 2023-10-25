import theme from 'constants/theme';
import { isAuthPage } from 'utils';

const setAuthPageBackgroundColor = (path: string) => {
  document.body.style.backgroundColor = isAuthPage(path)
    ? theme.colors.authPageBackgroundColor
    : theme.colors.whiteColor;
};

export default setAuthPageBackgroundColor;
