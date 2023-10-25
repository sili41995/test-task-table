import 'react-toastify/dist/ReactToastify.css';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosLock, IoMdEye, IoMdEyeOff, IoMdPerson } from 'react-icons/io';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import { toasts } from 'utils';
import Input from 'components/Input';
import { selectIsLoading } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICredentials } from 'types/types';
import { IconBtnType } from 'constants/iconBtnType';
import { FormType } from 'constants/formType';
import defaultAvatar from '../default-signin-avatar.png';

const LoginForm: FC = () => {
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  const watchPassword = watch('password');

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().then(() => {
        toasts.successToast('Hello, my friend!');
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  useEffect(() => {
    errors.username?.type === 'required' &&
      toasts.errorToast('Login is required');
    errors.username?.type === 'maxLength' &&
      toasts.errorToast('Password max length is 150 characters');
    errors.password?.type === 'required' &&
      toasts.errorToast('Password is required');
    errors.password?.type === 'minLength' &&
      toasts.errorToast('Password min length is 6 characters');
    errors.password?.type === 'maxLength' &&
      toasts.errorToast('Password max length is 128 characters');
  }, [errors, isSubmitting]);

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    setCredentials(data);
  };

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt='user avatar' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{
            ...register('username', { required: true, maxLength: 150 }),
          }}
          placeholder='Login'
          inputType={FormType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<IoMdPerson />}
          fieldIconSize={20}
        />
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: 6,
              maxLength: 128,
            }),
          }}
          type={isShowPassword ? 'text' : 'password'}
          placeholder='Password'
          inputType={FormType.authForm}
          children={
            watchPassword && (isShowPassword ? <IoMdEyeOff /> : <IoMdEye />)
          }
          btnType={IconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<IoIosLock />}
          fieldIconSize={20}
        />
        <Button disabled={isLoading} type='submit'>
          Log in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
