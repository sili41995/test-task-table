import { FC } from 'react';
import AuthForm from 'components/AuthForm';
import LoginForm from 'components/LoginForm';

const LoginPage: FC = () => (
  <AuthForm>
    <LoginForm />
  </AuthForm>
);

export default LoginPage;
